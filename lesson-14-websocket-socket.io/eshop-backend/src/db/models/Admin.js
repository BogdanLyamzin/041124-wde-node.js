import {Schema, model} from "mongoose";

import { emailValidation } from "../../contansts/auth.constants.js";

import { addAllHooksToMongooseSchema } from "./hooks.js";

const adminSchema = new Schema({
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

const Admin = model("admin", adminSchema);

export default Admin;