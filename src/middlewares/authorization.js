const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/User');
const Role = require('../models/Role');

const verifyToken = async (req, res,next) =>{

    try{
    const token = req.headers["x-access-token"];

    if(!token) return res.status(403).send({message: "no se ha proporcionado ningún token"});
    const decoded = jwt.verify(token, config.secrets.SECRET);
    req.UserId = decoded.id
    const user = await User.findById(req.UserId, {password: 0});
    if(!user) return res.status(404).send({ message : "Usuario no encontrado"});
    
    next();
    }catch(error){
        return res.status(401).send({ message: "Usuario no autorizado"});
    }
}

const isSeller = async (req,res,next) =>{

    const user = await User.findById({_id: req.UserId});
    const roles = await Role.find({_id : {$in : user.roles}});
    for(let i=0; i< roles.length; i++){
        if(roles[i].name === "Administrator" || roles[i].name === "Seller"){
            next();
            return;
        }
    }
    return res.status(401).send({ message: "Usuario no autorizado"});

}

const isAdministrator = async (req,res, next) =>{

    const user = await User.findById({_id: req.UserId});
    const roles = await Role.find({_id : {$in : user.roles}});
    for(let i=0; i< roles.length; i++){
        if(roles[i].name === "Administrator"){
            next();
            return;
        }
    }
    return res.status(401).send({ message: "Usuario no autorizado"});
}

module.exports = {
    verifyToken,
    isSeller,
    isAdministrator,
}