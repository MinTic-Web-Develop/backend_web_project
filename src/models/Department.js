import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const DepartmentSchema = new Schema({
    name: {
        type: String,
        unique: true,
    },
},{
    timestamps: true,
    versionKey: false
})

const Department = mongoose.model('Department', DepartmentSchema);

module.exports = Department;