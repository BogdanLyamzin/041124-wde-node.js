import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

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