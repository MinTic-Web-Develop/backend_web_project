import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    name: String,
    description: String,
    imgURL: String,
    active: Boolean,
    node: Boolean,
    node_id: Schema.Types.ObjectId,
},{
    timestamps: true,
    versionKey: false
})

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;
