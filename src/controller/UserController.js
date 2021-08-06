const User = require('../models/User');
const Role = require('../models/Role');
const Location = require('../models/Location');


const getUsers = async (req, res) =>{
    const { type } = req.query
    console.log(type)
    if (type){
        const users = await User.find({roles :{$in: type}}).populate("roles", "name").populate({ path: "address", populate: { path: "city", select: "name"}});
        if (!users || users < 1){
            res.status(404).send({ message: "No se han encontrado usuarios" });
        }else{
            res.status(200).send(users);
        }
    }
    else{
        const users = await User.find().populate("roles", "name").populate("address").populate({ path: "address", populate: { path: "city", select: "name"}});;
        if (!users || users < 1){
            res.status(404).send({ message: "No se han encontrado usuarios" });
        }else{
            res.status(200).send(users);
        }
    }
}

const getUserById = async (req, res) =>{
    const { userId } = req.params
    const user = await User.findOne({ _id: userId }).populate("roles", "name").populate("address").populate({ path: "address", populate: { path: "city", select: "name"}});
    if (!user || user < 1){
        res.status(404).send({ message: "No se ha encontrado el usuario" });
    }else{
        res.status(200).send(user);
    }
}

const updateUserInformationById = async(req, res) =>{
    const { userId } = req.params
    const userData = req.body

    await User.findByIdAndUpdate(
        { _id: userId },
        userData,
        (err, userUpdate) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!userUpdate) {
              res.status(404).send({ message: "No se encontro el usuario" });
            } else {
              res.status(200).send({ message: "Información actualizada" });
            }
          }
        }
      );
}

const addLocation = async(req,res) =>{
    const { userId } = req.params
    const { address, city } = req.body
    const location = await new Location({address, city});
    location.save();
    if(location){
        const addedLocation = await User.findByIdAndUpdate({ _id: userId },{ address: location._id})
        if (!addedLocation){
            res.status(404).send({ message: "No fue posible agregar la dirección" });
        }else{
            res.status(200).send({ message: "Dirección agregada correctamente" });
        }
    }
    else{
        res.status(400).send({ message: "Error al agregar la dirección" });
    }
}

const updateLocationById = async (req,res) =>{
    const { locationId } = req.params
    const locationData = req.body
    await Location.findByIdAndUpdate(
        { _id: locationId },
        locationData,
        (err, locationUpdate) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!locationUpdate) {
              res.status(404).send({ message: "No se encontro la dirección" });
            } else {
              res.status(200).send({ message: "Dirección actualizada" });
            }
          }
        }
    ); 
}

const deleteLocationById = async (req,res) =>{
    const { locationId } = req.params
    Location.findByIdAndDelete({ _id: locationId }, (err) => {
        if (err) {
            res.status(404).send({ message: "No se ha encontrado la dirección" });
        } else {
            res.status(200).send({ message: "Dirección eliminada con éxito" });
        }
    });
}

const deactivateUsersById = async (req, res) =>{
    const { userId } = req.params
    await User.findByIdAndUpdate({ _id: userId },{active: false },
        (err, userUpdate) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!userUpdate) {
              res.status(404).send({ message: "No se encontro el usuario" });
            } else {
              res.status(200).send({ message: "Usuario desactivado con éxito." });
            }
          }
        }
    );
}

const activateUsersById = async (req, res) =>{
    const { userId } = req.params
    await User.findByIdAndUpdate({ _id: userId },{active: true },
        (err, userUpdate) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!userUpdate) {
              res.status(404).send({ message: "No se encontro el usuario" });
            } else {
              res.status(200).send({ message: "Usuario activado con éxito." });
            }
          }
        }
    );
}

module.exports = {
    getUsers,
    getUserById,
    updateUserInformationById,
    addLocation,
    updateLocationById,
    deleteLocationById,
    deactivateUsersById,
    activateUsersById,  
}

