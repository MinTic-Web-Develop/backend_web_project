import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema(
  {
    active: Boolean,
    number: String,
    phone: String,
    manager: {
        ref: "User",
        type: Schema.Types.ObjectId, 
    },
    address_restaurant: {
        ref: "Location",
        type: Schema.Types.ObjectId,
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("Restaurant", RestaurantSchema);