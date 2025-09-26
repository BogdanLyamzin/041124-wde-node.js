import { Schema, model, Document } from "mongoose";

import { emailValidation } from "../../contansts/auth.constants.js";

interface IUser {
  fullName: string;
  email: string;
  password: string;
  verify: boolean;
}

export interface IUserDocument extends IUser, Document {};

const userSchema = new Schema<IUserDocument>(
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

const User = model<IUserDocument>("user", userSchema);

export default User;
