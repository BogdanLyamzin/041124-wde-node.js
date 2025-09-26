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
    },
}, {versionKey: false, timestamps: true});

categorySchema.virtual("products", {
    ref: "product",
    localField: "_id",
    foreignField: "category"
});

categorySchema.set("toObject", {virtuals: true});
categorySchema.set("toJSON", {virtuals: true});

addAllHooksToMongooseSchema(categorySchema);

const Category = model("category", categorySchema);

export default Category;