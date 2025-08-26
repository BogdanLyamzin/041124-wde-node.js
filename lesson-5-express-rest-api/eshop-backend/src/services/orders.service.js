import {readFile} from "node:fs/promises";
import path from "node:path";

const ordersPath = path.resolve("src", "db", "orders.json");

export const getOrders = async()=> {
    const data = await readFile(ordersPath, "utf-8");
    return JSON.parse(data);
}

export const getORderById = async id => {
    const orders = await getOrders();
    const result = orders.find(item => item.id === id);
    return result || null;
}