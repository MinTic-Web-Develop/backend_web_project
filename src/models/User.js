const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Role = mongoose.model("Role");

const UserSchema = new Schema(
  {
    name: String,
    lasName: String,
    email: {
      type: String,
      unique: true,
    },
    password: String,
    active: Boolean,
    role: { type: Schema.ObjectId, ref: "Role" },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", UserSchema);
