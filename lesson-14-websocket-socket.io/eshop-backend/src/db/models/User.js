import { Schema, model } from "mongoose";

import { emailValidation } from "../../contansts/auth.constants.js";

const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      match: emailValidation.regexp.value,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    verify: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

userSchema.virtual("orders", {
  ref: "order",
  localField: "_id",
  foreignField: "user"
});

userSchema.set("toObject", {virtuals: true});
userSchema.set("toJSON", {virtuals: true});

const User = model("user", userSchema);

export default User;
