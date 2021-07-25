import mongoose from 'mongoose'
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const UserSchema = new Schema(
  {
    name: String,
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    active: Boolean,
    phone: String,
    address: {
      ref: "Location",
      type: Schema.Types.ObjectId,
    },
    roles:[{
      ref : "Role",
      type: Schema.Types.ObjectId,
    }]
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

UserSchema.statics.encryptPassword = async (password) =>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async ( password, receivedPassword) =>{
  return await bcrypt.compare(password, receivedPassword);
}

module.exports = mongoose.model("User", UserSchema);
