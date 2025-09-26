"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryById = exports.updateCategoryById = exports.addCategory = exports.getCategoryById = exports.getCategories = void 0;
const promises_1 = require("node:fs/promises");
const node_path_1 = __importDefault(require("node:path"));
const Category_js_1 = __importDefault(require("../db/models/Category.js"));
// import Product from "../db/models/Product.js";
const categoryDir = node_path_1.default.resolve("public", "categories");
const getCategories = () => Category_js_1.default.find();
exports.getCategories = getCategories;
const getCategoryById = async (id) => {
    const category = await Category_js_1.default.findById(id).populate("products");
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
exports.getCategoryById = getCategoryById;
const addCategory = async (payload, file) => {
    const newPath = node_path_1.default.join(categoryDir, file.filename);
    await (0, promises_1.rename)(file.path, newPath);
    const image = node_path_1.default.join("categories", file.filename);
    return Category_js_1.default.create({ ...payload, image });
};
exports.addCategory = addCategory;
const updateCategoryById = async (id, payload) => Category_js_1.default.findByIdAndUpdate(id, payload);
exports.updateCategoryById = updateCategoryById;
const deleteCategoryById = async (id) => Category_js_1.default.findByIdAndDelete(id);
exports.deleteCategoryById = deleteCategoryById;
//# sourceMappingURL=category.service.js.map