const Product = require("../models/Product");

const createProduct = (req, res) => {
  const product = new Product();
  console.log(req.body);
  const { name, description } = req.body;
  product.name = name;
  product.description = description;

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send({ message: "El usuario ya existe" });
    } else {
      if (!userStored) {
        res.status(404).send({ message: "error al crear el usuariio" });
      } else {
        res.status(200).send({ user: userStored });
      }
    }
  });
};

const getProducts = (req, res) => {
  console.log("productcos");
  res.json("get products");
};

const getProductById = (req, res) => {
  res.json("get a specific product");
};

const updateProductById = (req, res) => {
  res.json("update a specific product");
};

const deleteProductById = (req, res) => {
  res.json("delete a specific product");
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById,
};
