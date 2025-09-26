import { getOrders, addOrder } from "../services/order.service.js"

export const getOrdersController = async(req, res)=> {
    const data = await getOrders();
    res.json(data);
}

export const addOrderController = async(req, res)=> {
    const data = await addOrder({
        ...req.body,
        user: req.user._id,
    });

    res.status(201).json(data);
}