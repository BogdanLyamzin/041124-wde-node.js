import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../db/models/User.js";

import sendEmail from "../utils/sendEmail.js";
import HttpError from "../utils/HttpError.js";

const {BASE_URL, JWT_SECRET} = process.env;

export const registerUser = async payload => {
    const {password, email} = payload;
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({...payload, password: hashPassword});

    const code = jwt.sign({email}, JWT_SECRET, {expiresIn: "1h"});

    const verifyEmail = {
        to: email,
        subject: "Verify email",
        html: `<a href="${BASE_URL}/api/auth/verify?code=${code}" target="_blank">Click verify email</a>`,
    }
    await sendEmail(verifyEmail);
    return newUser;
}

export const verifyUser = async code => {
    try {
        const {email} = jwt.verify(code, JWT_SECRET);
        const user = await User.findOne({
            where: {
                email,
            }
        });
        await user.update({verify: true});
        return user;
    }
    catch(error) {
        throw HttpError(401, error.message);
    }
}

export const loginUser = async payload => {
    const {email, password} = payload;
    const user = await User.findOne({
        where: {
            email
        }
    });
    if(!user) throw HttpError(401, "Email or password invalid");

    if(!user.verify) throw HttpError(401, "Email not verified");

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) throw HttpError(401, "Email or password invalid");


}