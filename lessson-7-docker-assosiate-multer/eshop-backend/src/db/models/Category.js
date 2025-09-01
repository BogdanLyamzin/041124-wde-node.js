import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Category = sequelize.define(
    "category",
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                args: true,
                msg: "Category name must be unique!"
            }
        },
        image: {
            type: DataTypes.TEXT,
            allowNull: false,
        }
    }
);

// Category.sync({force: true});

export default Category;