import {rename} from "node:fs/promises";
import path from "node:path";

import Category from "../db/models/Category.js";

const categoryDir = path.resolve("public", "categories");

export const getCategories = ()=> Category.find();

export const getCategoryById = id => Category.findById(id);

export const addCategory = async (payload, file) =>{
    const newPath = path.join(categoryDir, file.filename);
    await rename(file.path, newPath);
    const image = path.join("categories", file.filename);
    return Category.create({...payload, image});
};

export const updateCategoryById = async(id, payload) => Category.findByIdAndUpdate(id, payload);

export const deleteCategoryById = async id => Category.findByIdAndDelete(id);