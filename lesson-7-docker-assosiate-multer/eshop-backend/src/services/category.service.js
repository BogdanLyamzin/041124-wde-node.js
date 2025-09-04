import {rename} from "node:fs/promises";
import path from "node:path";

import Category from "../db/models/Category.js";
import Product from "../db/models/Product.js";

const categoryDir = path.resolve("public", "categories");

export const getCategories = ()=> Category.findAll({
    include: {
        model: Product,
        as: "products"
    }
}); 

export const getCategoryById = id => Category.findByPk(id);

export const addCategory = async (payload, file) =>{
    const newPath = path.join(categoryDir, file.filename);
    await rename(file.path, newPath);
    const image = path.join("categories", file.filename);
    return Category.create({...payload, image});
};

export const updateCategoryById = async(id, payload) => {
    const category = await getCategoryById(id);
    if(!category) return null;

    await category.update(payload);

    return category;
}

export const deleteCategoryById = async(id, payload) => {
    const category = await getCategoryById(id);
    if(!category) return null;

    await category.destroy();

    return category;
}