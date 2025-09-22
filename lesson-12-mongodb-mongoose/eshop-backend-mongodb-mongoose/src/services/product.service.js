import Product from "../db/models/Product.js";

export const getProducts = ()=> Product.find();

export const addProduct = payload => Product.create(payload);