const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roleSchema = new Schema(
  {
    name: String,
    descrition: String,
    
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Role", roleSchema);
