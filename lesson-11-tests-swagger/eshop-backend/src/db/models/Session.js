import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Session = sequelize.define(
    "session",
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
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

// Session.sync({force: true});

export default Session;