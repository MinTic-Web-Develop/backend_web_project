import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const OrderSchema = new Schema(
  {
    inside: Boolean,
    status: String,
    client: {
        ref: "User",
        type: Schema.Types.ObjectId,
    },
    Restaurant: {
        ref: "Restaurant",
        type: Schema.Types.ObjectId,
    },
    delivery_address: String,
    Details : [{
        ref: "Detail",
        type: Schema.Types.ObjectId,
    }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


module.exports = mongoose.model("Order", OrderSchema);