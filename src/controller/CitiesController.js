const City = require('../models/City');

const getCities = async(req,res) =>{
    const cities = await City.find();
    if (!cities || cities.length < 1){
        res.status(404).send({ message: "No se han encontrado ciudades" });
    } else {
        res.status(200).send(cities);
    }
}

const getCityById = async(req, res) => {
    const { cityId } = req.params
    const city = await City.find({ _id: cityId });
    if (!city || city.length < 1){
        res.status(404).send({ message: "No se ha encontrado la ciudad" });
    } else {
        res.status(200).send(city);
    }
}

const getCityByDepartmentId = async(req, res) => {
    const { departmentId } = req.params
    const cities = await City.find({ department: departmentId });
    if (!cities || cities.length < 1){
        res.status(404).send({ message: "No se han encontrado las ciudades" });
    } else {
        res.status(200).send(cities);
    }
}


module.exports = {
    getCities,
    getCityById,
    getCityByDepartmentId,
}