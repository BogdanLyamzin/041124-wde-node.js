import bcrypt from "bcrypt";

import Admin from "../db/models/Admin.js";

export const getAdmins = (query) => Admin.findAll({
    where: query
});

export const addAdmin = async payload => {
    const hashPassword = await bcrypt.hash(payload.password, 10);
    return Admin.create({...payload, password: hashPassword});
}