const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const ROLES = ["Administrator", "Seller", "Customer"];

const roleSchema = new Schema(
  {
    name: String,  
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", roleSchema);
