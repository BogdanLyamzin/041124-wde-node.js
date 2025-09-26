"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCategoryByIdController = exports.updateCategoryByIdController = exports.addCategoryController = exports.getCategoryByIdController = exports.getCategoriesController = void 0;
const HttpError_js_1 = __importDefault(require("../utils/HttpError.js"));
const category_service_js_1 = require("../services/category.service.js");
const getCategoriesController = async (req, res) => {
    const categories = await (0, category_service_js_1.getCategories)();
    res.json(categories);
};
exports.getCategoriesController = getCategoriesController;
const getCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    const category = await (0, category_service_js_1.getCategoryById)(id);
    if (!category) {
        throw (0, HttpError_js_1.default)(404, `Category with id=${id} not found`);
    }
    res.json(category);
};
exports.getCategoryByIdController = getCategoryByIdController;
const addCategoryController = async (req, res) => {
    const data = await (0, category_service_js_1.addCategory)(req.body, req.file);
    res.status(201).json(data);
};
exports.addCategoryController = addCategoryController;
const updateCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    const category = await (0, category_service_js_1.updateCategoryById)(id, req.body);
    if (!category) {
        throw (0, HttpError_js_1.default)(404, `Category with id=${id} not found`);
    }
    res.json(category);
};
exports.updateCategoryByIdController = updateCategoryByIdController;
const deleteCategoryByIdController = async (req, res) => {
    const { id } = req.params;
    const category = await (0, category_service_js_1.deleteCategoryById)(id);
    if (!category) {
        throw (0, HttpError_js_1.default)(404, `Category with id=${id} not found`);
    }
    //   res.status(204).send();
    res.json(category);
};
exports.deleteCategoryByIdController = deleteCategoryByIdController;
//# sourceMappingURL=category.controller.js.map