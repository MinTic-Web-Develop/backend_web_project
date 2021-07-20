const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sucursalSchema = new Schema(
  {
    name: String,
    direction: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", roleSchema);
