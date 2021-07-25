const User = require('../models/User');
const Role = require('../models/Role');
const jwt = require('jsonwebtoken');
const config = require('../config');

const signup = async(req,res)=>{
    const { name, email, password, phone, roles } = req.body;

    const userFound = await User.findOne({email : email});

    if(!userFound){
        const newUser = new User({
            name,
            email,
            password: await User.encryptPassword(password),
            phone,
            address: null,
            active: true,
        });
    
        if (roles){
           const foundRole = await Role.find({ name: {$in: roles}});
           newUser.roles = foundRole.map(role => role._id);
        }else{
            const role = await Role.findOne({name: "Customer"});
            newUser.roles = [role._id];
        }
    
        const saveUser = await newUser.save();
    
        res.status(200).send({ message: `Usuario registrado con éxito`});
    }
    res.status(400).send({ message: "El email ya se encuentra registrado"});   
}


const signin = async(req,res)=>{
    const { email, password} = req.body

    const userFound = await User.findOne({email : email}).populate("roles", "name");
    const matchPassword = await User.comparePassword(password, userFound.password);
    if(!matchPassword || !userFound) return res.status(400).send({ token: null, message: "Usuario o contraseña invalida"});

    const token = jwt.sign({id: userFound._id }, config.secrets.SECRET,{
        expiresIn: 86400 //24 horas
    });

    res.status(200).send({
        message: `Bienvenido ${userFound.name}`,
        token: token,
        user:{
            id: userFound._id,
            name: userFound.name,
            email: userFound.email,
            roles: userFound.roles
        }
    });
}

module.exports = {
    signup,
    signin,
}