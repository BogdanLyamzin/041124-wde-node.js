import { DataTypes } from "sequelize";

import sequelize from "../sequelize.js";

const Product = sequelize.define(
    "product",
    {
        name: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
            validate: {
                min: {
                    args: 1,
                    msg: "Price cannot be 0 or less"
                }
            }
        },
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "categories",
                key: "id"
            },
            onUpdate: "CASCADE",
            onDelete: "SET NULL"
        }
    }
)

// Product.sync({alter: true});

export default Product;