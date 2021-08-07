import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const DetailSchema = new Schema(
  {
    quantities: Number,
    product_id: {
      ref: "Product",
      type: Schema.Types.ObjectId,
    },
    order_id:{
        ref: "Order",
        type: Schema.Types.ObjectId, 
    }
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("Detail", DetailSchema);