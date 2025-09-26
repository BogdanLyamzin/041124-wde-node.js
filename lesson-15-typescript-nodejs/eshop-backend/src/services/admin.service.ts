import bcrypt from "bcrypt";

import Admin, {IAdminDocument} from "../db/models/Admin";

import HttpError from "../utils/HttpError.js";

import { Roles } from "../typescript/types";

export const getAdmins = (query): IAdminDocument[] => Admin.find(query);

type Admin = {
    email: string;
    password: string;
    role: Roles;
}

export const addAdmin = async (payload: Admin): Promise<IAdminDocument>  => {
    const {email, password} = payload;
    const admin = await Admin.findOne({email});
    if(admin) throw HttpError(404, `Admin with email=${email} already exist`);

    const hashPassword: string = await bcrypt.hash(password, 10);
    return Admin.create({...payload, password: hashPassword});
}