import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    description: String,
    category: Schema.Types.ObjectId,
    price: Number,
    imgURL: String,
    active: String,
    keywords : String,
    tax : Number, 
},{
    timestamps: true,
    versionKey: false
})

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
