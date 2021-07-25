const User = require('../models/User');
const Role = require('../models/Role');


const getUsers = async (req, res) =>{
    res.json({message: " get all users"});
}

const getUsersByRol = async (req, res) =>{
    res.json({message: " get all users"});
}

const getUserById = async (req, res) =>{
    res.json({message: " get user by Id"});
}

const createUser = async(req,res) =>{
    res.json({message: "create sellers and administrator users"});
}

const updateUserInformationById = async(req, res) =>{
    res.json({message: "update users information (phone, email, name )"});
}

const addLocation = async(req,res) =>{
    res.json({message: "Added location address by cities"});
}

const updateLocationById = async (req,res) =>{
    res.json({message: "update location address by cities"});
}

const deleteLocationById = async (req,res) =>{
    res.json({message: "delete location address"});
}

const deactivateUsersById = async (req, res) =>{
    res.json({message: "deactivate sellers and administrator users"});
}

module.exports = {
    getUsers,
    getUsersByRol,
    getUserById,
    createUser,
    updateUserInformationById,
    addLocation,
    updateLocationById,
    deleteLocationById,
    deactivateUsersById,    
}

