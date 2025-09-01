import Category from "../db/models/Category.js";

export const getCategories = ()=> Category.findAll(); // SElECT * from categories;

export const getCategoryById = id => Category.findByPk(id);

export const addCategory = payload => Category.create(payload);

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