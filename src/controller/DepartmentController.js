const Department = require('../models/Department');

const getDepartments = async(req,res) =>{
    const departments = await Department.find();
    if (!departments || departments.length < 1){
        res.status(404).send({ message: "No se han encontrado los departamentos" });
    } else {
        res.status(200).send(departments);
    }
}

module.exports = {
    getDepartments,
}