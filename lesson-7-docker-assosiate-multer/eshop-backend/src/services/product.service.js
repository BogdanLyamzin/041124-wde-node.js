import Product from "../db/models/Product.js";
import Category from "../db/models/Category.js";

export const getProducts = ()=> Product.findAll({
    include: {
        model: Category,
        as: "category"
    }
})

export const addProduct = payload => Product.create(payload);