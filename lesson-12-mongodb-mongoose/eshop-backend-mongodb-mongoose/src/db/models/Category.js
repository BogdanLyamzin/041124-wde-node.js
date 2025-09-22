import {Schema, model} from "mongoose";

import {addAllHooksToMongooseSchema} from "./hooks.js";

const categorySchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {versionKey: false, timestamps: true});

addAllHooksToMongooseSchema(categorySchema);

const Category = model("category", categorySchema);

export default Category;