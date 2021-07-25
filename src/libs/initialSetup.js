const Role = require('../models/Role');
const Department = require('../models/Department');
const City = require('../models/City');


const createRoles = async() =>{

    try{
        const count = await Role.estimatedDocumentCount()

        if(count > 0) return;
    
        const values = await Promise.all([
            new Role({name: 'Customer'}).save(),
            new Role({name: 'Administrator'}).save(),
            new Role({ name: 'Seller'}).save(),
        ]);

    }catch(error){
        console.error(error);
    }
  
}

const createCitiesAndDepartments = async() =>{
    try{
        const count = await Department.estimatedDocumentCount()

        if(count > 0) return;

        const departments = await Promise.all([
            new Department({ name: 'Bogota'}).save(),
            new Department({ name: 'Valle del cauca'}).save(),
            new Department({ name: 'Antioquia'}).save(),
        ]);

        const cities = await Promise.all([
            new City({ name: 'Cali', department: departments[1]._id }).save(),
            new City({ name: 'Palmira', department: departments[1]._id }).save(),
            new City({ name: 'Bogota', department: departments[0]._id }).save(),
            new City({ name: 'Medellin', department: departments[2]._id }).save(),
        ]);
        
    }catch(error){
        console.log(error);
    }
}

module.exports = {
    createRoles,
    createCitiesAndDepartments,
}