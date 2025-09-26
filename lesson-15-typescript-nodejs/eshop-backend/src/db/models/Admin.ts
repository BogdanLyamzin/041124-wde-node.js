import {Schema, model, Document} from "mongoose";

import { emailValidation } from "../../contansts/auth.constants.js";

import { addAllHooksToMongooseSchema } from "./hooks.js";

import { Roles } from "../../typescript/types.js";

interface IAdmin {
    fullName: string;
    email: string;
    password: string;
    verify: boolean;
    role: Roles;
}

export interface IAdminDocument extends IAdmin, Document {};

const adminSchema = new Schema<IAdminDocument>({
    fullName: {
        type: String,
        required: [true, "fullName must be exist"],
    },
    email: {
        type: String,
        unique: true,
        match: emailValidation.regexp.value,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['manager', 'admin', 'superadmin'],
        required: true,
    },
    verify: {
        type: Boolean,
        default: true,
        required: true,
    }
}, {versionKey: false, timestamps: true});

addAllHooksToMongooseSchema(adminSchema);

const Admin = model<IAdminDocument>("admin", adminSchema);

export default Admin;