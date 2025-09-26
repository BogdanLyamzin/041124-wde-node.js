import Order from "../db/models/Order.js";

export const getOrders = () =>
  Order.find()
    .populate("user", "fullName email")
    .populate("items.product");

export const addOrder = (payload) => Order.create(payload);
