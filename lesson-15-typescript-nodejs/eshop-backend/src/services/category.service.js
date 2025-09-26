import {rename} from "node:fs/promises";
import path from "node:path";

import Category from "../db/models/Category.js";
// import Product from "../db/models/Product.js";

const categoryDir = path.resolve("public", "categories");

export const getCategories = ()=> Category.find();

export const getCategoryById = async id => {
    const category = await Category.findById(id).populate("products");
    console.dir(category.toObject());
    console.dir(category.toJSON());
    return category;
    // const category = await Category.findById(id);
    // const products = await Product.find({category: category.id});
    // return {
    //     category,
    //     products,
    // }
};

export const addCategory = async (payload, file) =>{
    const newPath = path.join(categoryDir, file.filename);
    await rename(file.path, newPath);
    const image = path.join("categories", file.filename);
    return Category.create({...payload, image});
};

export const updateCategoryById = async(id, payload) => Category.findByIdAndUpdate(id, payload);

export const deleteCategoryById = async id => Category.findByIdAndDelete(id);