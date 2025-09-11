import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";
import Session from "../db/models/Session.js";

import sendEmail from "../utils/sendEmail.js";
import HttpError from "../utils/HttpError.js";
import generateRandomString from "../utils/generateRandomString.js";

const { FRONTEND_URL, JWT_SECRET } = process.env;

const createSession = ()=> ({
   accessToken: generateRandomString(30),
   refreshToken: generateRandomString(30),
   accessTokenValidUntil: new Date(Date.now() + 1000 * 60 * 15),
   refreshTokenValidUntil: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
})

export const findSession = query => Session.findOne({
  where: query,
})

export const findUser = (query) =>
  User.findOne({
    where: query,
  });

export const registerUser = async (payload) => {
  const { password, email } = payload;
  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = await User.create({ ...payload, password: hashPassword });

  const code = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

  const verifyEmail = {
    to: email,
    subject: "Verify email",
    html: `<a href="${FRONTEND_URL}/auth/verify?code=${code}" target="_blank">Click verify email</a>`,
  };

  await sendEmail(verifyEmail);
  return newUser;
};

export const verifyUser = async (code) => {
  try {
    const { email } = jwt.verify(code, JWT_SECRET);
    const user = await findUser({ email });
    if (!user) throw HttpError(401, "User not found");

    await user.update({ verify: true });
    return user;
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export const restoreUserPassword = async (email) => {
  const user = await findUser({ email });
  if (!user) throw HttpError(401, "User not found");

  const code = jwt.sign({ email }, JWT_SECRET, { expiresIn: "15m" });
  const passwordRestoreEmail = {
    to: email,
    subject: "Restore password",
    html: `<a href="${FRONTEND_URL}/auth/restore-password?code=${code}" target="_blank">Click restore password</a>`,
  };

  await sendEmail(passwordRestoreEmail);
};

export const createNewUserPassword = async ({ code, password }) => {
  try {
    const { email } = jwt.verify(code, JWT_SECRET);
    const user = await findUser({ email });
    if (!user) throw HttpError(401, "User not found");

    const hashPassword = await bcrypt.hash(password, 10);
    await user.update({ password: hashPassword });
    return user;
  } catch (error) {
    throw HttpError(401, error.message);
  }
};

export const loginUser = async (payload) => {
  const { email, password } = payload;
  const user = await findUser({ email });
  if (!user) throw HttpError(401, "Email or password invalid");

  if (!user.verify) throw HttpError(401, "Email not verified");

  const passwordCompare = await bcrypt.compare(password, user.password);
  if (!passwordCompare) throw HttpError(401, "Email or password invalid");

  const session = createSession();

  return Session.create({
    userId: user.id,
    ...session,
  });
};

export const refreshTokens = async ({refreshToken})=> {
  if(!refreshToken) throw HttpError(401, "refreshToken not found");

  const session = await findSession({refreshToken});
  if(!session) throw HttpError(401, "refreshToken not found");
  if(session.refreshTokenValidUntil < new Date()) throw HttpError(401, "refreshToken expired");

  const newSession = createSession();
  await session.update({...newSession});
  return session;
}