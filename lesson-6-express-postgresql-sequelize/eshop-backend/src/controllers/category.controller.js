import HttpError from "../utils/HttpError.js";

import {
  getCategories,
  getCategoryById,
  addCategory,
  updateCategoryById,
  deleteCategoryById,
} from "../services/category.service.js";

export const getCategoriesController = async (req, res) => {
  const categories = await getCategories();

  res.json(categories);
};

export const getCategoryByIdController = async (req, res) => {
  const { id } = req.params;
  const category = await getCategoryById(id);
  if (!category) {
    throw HttpError(404, `Category with id=${id} not found`);
  }

  res.json(category);
};

export const addCategoryController = async (req, res) => {
  const data = await addCategory(req.body);

  res.status(201).json(data);
};

export const updateCategoryByIdController = async (req, res) => {
  const { id } = req.params;
  const category = await updateCategoryById(id, req.body);
  if (!category) {
    throw HttpError(404, `Category with id=${id} not found`);
  }

  res.json(category);
};

export const deleteCategoryByIdController = async (req, res) => {
  const { id } = req.params;
  const category = await deleteCategoryById(id);
  if (!category) {
    throw HttpError(404, `Category with id=${id} not found`);
  }

//   res.status(204).send();
  res.json(category);
};
