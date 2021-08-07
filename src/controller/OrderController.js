const Order = require('../models/Order');
const Detail = require('../models/Detail');
const Restaurant = require('../models/Restaurant');
const User = require('../models/User');


const createShoppingCart = async (inside, client, Restaurant, delivery_address) =>{
    const status = 'ACTIVE';
    const createOrder = await new Order({inside,status, client, Restaurant, delivery_address});
    createOrder.save();
    return createOrder;
}

const getShoppingCart =  async (req, res) =>{
    const { inside, restaurant, delivery_address, email} = req.query;
    const user = await User.findOne({ email : email});
    if (user){
        const activeOrder = 
        await Order.findOne({client: user._id, status: 'ACTIVE'}).populate("Details").populate({ path: "Details", populate: {path: "product_id"}}).
        populate("client").populate({ path: "client", select: "name"})
        .populate("Restaurant").populate({ path: "Restaurant", select: "number"});
        if (!activeOrder || activeOrder.length < 1){
            const createOrder = await createShoppingCart(inside, user._id, restaurant, delivery_address);
            res.status(200).send("Orden creada");
        }
        else{
            res.status(200).send(activeOrder);
        }
    }
    else{
        res.status(400).send({message: "Usuario no encontrado"});
    }
    
}

const addProducts = async(req,res) =>{
    const { product_id, quantities} = req.body
    const { email } = req.query
    const user = await User.findOne({ email : email});
    if (user){
        const activeOrder = await Order.findOne({client: user._id , status: 'ACTIVE'}).populate("Details");
        if (!activeOrder || activeOrder.length < 1){
            res.json("Es necesario especificar donde desea recibir su pedido");
        }
        else{
            const order_id = activeOrder._id;
            const detail_found = await Detail.findOne({product_id : product_id, order_id : order_id})
            if (detail_found){
                const update_detail = await Detail.findByIdAndUpdate({_id: detail_found._id}, { quantities: quantities});
                if(!update_detail){
                    res.status(400).send({message: "Error al agregar el producto"});
                }
                else{
                    res.status(200).send({message: "Producto agregado correctamente"});
                }
            }
            else {
                const createDetail = await new Detail({quantities, product_id, order_id});
                createDetail.save();
                const updateOrder = await Order.findByIdAndUpdate({ _id: order_id },{$set:{Details: createDetail._id}});
                if(updateOrder){
                    res.status(200).send({message: "Producto agregado correctamente"});
                    }
                else{
                    res.status(400).send({message: "Error al agregar el producto"});
                    }
            }
        }
    }
    else{
        res.status(400).send({message: "Usuario no encontrado"});
    }
}

module.exports = {
    getShoppingCart,
    addProducts,
}