import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    address: String,
    city: {
        ref: "City",
        type: Schema.Types.ObjectId,
    }, 
},{
    timestamps: true,
    versionKey: false
})

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;