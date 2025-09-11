import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

import { emailValidation } from "../../contansts/auth.constants.js";

const Admin = sequelize.define(
    "admin",
    {
        fullName: {
            type: DataTypes.STRING,
            required: true,
        },
        email: {
            type: DataTypes.STRING,
            required: true,
            validate: {
                is: {
                    args: emailValidation.regexp.value,
                    msg: emailValidation.regexp.message
                }
            },
            unique: {
                args: true,
                msg: "Email already exist"
            }
        },
        password: {
            type: DataTypes.STRING,
            required: true,
        },
        role: {
            type: DataTypes.ENUM,
            values: ['manager', 'admin', 'superadmin'],
        },
        verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }
);

// Admin.sync();

export default Admin;