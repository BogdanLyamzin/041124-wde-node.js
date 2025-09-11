import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Session = sequelize.define(
    "session",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "CASCADE"
        },
        accessToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        refreshToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accessTokenValidUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        refreshTokenValidUntil: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    }
);

// Session.sync({alter: true});

export default Session;