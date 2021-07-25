import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const CitySchema = new Schema({
    name: String,
    department: {
        ref: "Department",
        type: Schema.Types.ObjectId
    },
},{
    timestamps: true,
    versionKey: false
})

const City = mongoose.model('City', CitySchema);

module.exports = City;