import {Schema, model} from "mongoose";

import { addAllHooksToMongooseSchema } from "./hooks.js";

const orderSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
    },
    items: [{
        product: {
            type: Schema.Types.ObjectId,
            ref: "product",
            required: true,
        },
        count: {
            type: Number,
            min: 1,
            required: true,
        }
    }]

}, {versionKey: false, timestamps: true});

addAllHooksToMongooseSchema(orderSchema);

const Order = model("order", orderSchema);

export default Order;