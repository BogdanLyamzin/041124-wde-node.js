import {Schema, model} from "mongoose";

import { addAllHooksToMongooseSchema } from "./hooks.js";

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        min: 1,
        required: true,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "category",
        required: true,
    }

}, {versionKey: false, timestamps: true});

addAllHooksToMongooseSchema(productSchema);

const Product = model("product", productSchema);

export default Product;