import Product from "../db/models/Product.js";

export const getProducts = ()=> Product.find().populate("category", "-createdAt -updatedAt");

export const addProduct = payload => Product.create(payload);