import { getOrders, getORderById } from "../services/orders.service.js";

import HttpError from "../utils/HttpError.js";

export const getOrdersController = async (req, res) => {
  const orders = await getOrders();
  res.json(orders);
};

export const getOrderByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getORderById(Number(id));
  if(!data) {
    throw HttpError(404, `Order with id=${id} not found`);
  }

  res.json(data);
};

export const addOrderController = (req, res) => {
  res.json({});
};

export const updateOrderByIdController = (req, res) => {
  res.json({});
};

export const deleteOrderByIdController = (req, res) => {
  res.json({});
};
