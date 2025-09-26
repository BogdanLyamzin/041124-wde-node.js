import {
  registerUser,
  verifyUser,
  restoreUserPassword,
  createNewUserPassword,
  loginUser,
  logoutuser,
  refreshTokens,
} from "../services/auth.service.js";

const setupSession = (res, { accessToken, refreshToken }) => {
  res.cookie("accessToken", accessToken, {
    httpOnly: true,
  });

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });
};

export const registerController = async (req, res) => {
  await registerUser(req.body);

  res.status(201).json({
    message: "Register successfully",
  });
};

export const verifyController = async (req, res) => {
  await verifyUser(req.body.code);

  res.json({
    message: "User verify successfully",
  });
};

export const restorePasswordController = async (req, res) => {
  await restoreUserPassword(req.body.email);

  res.json({
    message: "Restore password link send to user email",
  });
};

export const createNewPasswordController = async (req, res) => {
  await createNewUserPassword(req.body);

  res.json({
    message: "Password changed successfully",
  });
};

export const loginController = async (req, res) => {
  const session = await loginUser(req.body);
  setupSession(res, session);

  res.json({
    message: "Login ssucessfully",
  });
};

export const refreshController = async (req, res) => {
  const session = await refreshTokens(req.cookies);
  console.log(session);
  setupSession(res, session);

  res.json({
    message: "Refresh ssucessfully",
  });
};

export const logoutController = async(req, res)=> {
  await logoutuser(req.cookies);
  
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.json({
    message: "Logout successfully"
  })
}