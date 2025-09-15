import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

import { emailValidation } from "../../contansts/auth.constants.js";

const User = sequelize.define(
    "user",
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
        verify: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        }
    }
);

// User.sync({force: true});

export default User;