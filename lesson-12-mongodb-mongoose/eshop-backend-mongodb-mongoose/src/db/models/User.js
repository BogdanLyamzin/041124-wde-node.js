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

const User = model("user", userSchema);

export default User;
