import bcrypt from "bcrypt";

import Admin from "../db/models/Admin.js";

import HttpError from "../utils/HttpError.js";

export const getAdmins = (query) => Admin.find(query);

export const addAdmin = async payload => {
    const {email, password} = payload;
    const admin = await Admin.findOne({email});
    if(admin) throw HttpError(404, `Admin with email=${email} already exist`);

    const hashPassword = await bcrypt.hash(password, 10);
    return Admin.create({...payload, password: hashPassword});
}