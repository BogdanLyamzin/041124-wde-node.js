import {unlink} from "node:fs/promises";

import Category from "../db/models/Category.js";
import Product from "../db/models/Product.js";

import cloudinary from "../utils/cloudinary.js";

export const getCategories = ()=> Category.findAll({
    include: {
        model: Product,
        as: "products"
    }
}); 

export const getCategoryById = id => Category.findByPk(id);

export const addCategory = async (payload, file) =>{
    const {url: image} = await cloudinary.uploader.upload(file.path, {
        folder: "categories",
        use_filename: true,
    });
    await unlink(file.path);
    
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