import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    description: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = model("Product", productSchema);
