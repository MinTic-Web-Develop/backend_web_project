const Restaurant = require('../models/Restaurant');
const Location = require('../models/Location');
const User = require('../models/User');

const getRestaurants = async (req, res) =>{
    const restaurants = 
        await Restaurant.find().populate("manager").populate({ path: "manager",  select: "name"}).
        populate("address_restaurant").populate({ path: "address_restaurant", populate: { path: "city", select: "name"}});
    if (!restaurants || restaurants.length < 1) {
        res.status(404).send({ message: "No se han encontrado Restaurantes" });
    } else {
        res.status(200).send(restaurants);
    }
}

const getRestaurantsById = async (req,res) =>{
    const { restaurantId } = req.params
    const restaurant = 
    await Restaurant.findOne({ _id: restaurantId }).populate("manager").populate({ path: "manager",  select: "name"}).
    populate("address_restaurant").populate({ path: "address_restaurant", populate: { path: "city", select: "name"}});
    if (!restaurant || restaurant.length < 1) {
        res.status(404).send({ message: "No se ha encontrado el restaurante" });
    } else {
        res.status(200).send(restaurant);
    }
}

const createRestaurant = async (req,res) =>{
    const { phone, active, manager, address, city } = req.body
    const location = await new Location({address, city});
    location.save();
    if(location){
        const user = await User.findOne({ _id: manager }).populate("roles", "name");
        let userRol = false;
        user.roles.map((rol)=>{
            if (rol.name == 'Seller' || rol.name == 'Administrator'){
                userRol = true;
            }
        });
        if(userRol == true){
            const address_restaurant = location._id.toString();
            const number = "S"+ "-" + (await Restaurant.countDocuments() + 1);
            const restaurant = await new Restaurant({ active, number, phone, manager, address_restaurant});
            restaurant.save((err, restaurantStored) => {
                if (err) {
                  res.status(500).send({ message: "El Restaurante ya existe" });
                } else {
                  if (!restaurantStored) {
                    res.status(404).send({ message: "error al crear el restaurante" });
                  } else {
                    res.status(200).send({ message: "Restaurante creado con éxito" });
                  }
                }
              });
        }
        else{
            res.status(400).send({ message: "El encargado debe tener el rol de vendedor o Administrador" });
        }
    }
    else{
        res.status(400).send({ message: "Error al crear el restaurante" });
    }
}


const closeRestaurant = async (req, res) =>{
    const { restaurantId } = req.params
    await User.findByIdAndUpdate({ _id: restaurantId },{active: false },
        (err, restaurantUpdate) => {
          if (err) {
            res.status(500).send({ message: "Error en el servidor" });
          } else {
            if (!restaurantUpdate) {
              res.status(404).send({ message: "No se encontro el restaurante" });
            } else {
              res.status(200).send({ message: "El restaurante se ha cerrado con éxito." });
            }
          }
        }
    );

}





module.exports = {
    getRestaurants,
    getRestaurantsById,
    createRestaurant,
    closeRestaurant,
}