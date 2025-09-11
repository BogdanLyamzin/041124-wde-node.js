import Category from "./models/Category.js";
import Product from "./models/Product.js";

Category.hasMany(Product, {
    foreignKey: "categoryId",
    as: "products",
});

Product.belongsTo(Category, {
    foreignKey: "id",
    as: "category"
});