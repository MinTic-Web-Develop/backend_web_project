const Product = require("../models/Product");

const createProduct = async (req, res) => {
  const { name, description, category, price, imgURL, active, keywords, tax } = req.body
  const product = await new Product({ name, description, category, price, imgURL, active, keywords, tax });

  product.save((err, productStored) => {
    if (err) {
      res.status(500).send({ message: "El producto ya existe" });
    } else {
      if (!productStored) {
        res.status(404).send({ message: "error al crear el producto" });
      } else {
        res.status(200).send({ message: "Producto creado con éxito" });
      }
    }
  });
};

const getProductsByCategory = async (req, res) => {
  const { categoryId } = req.params
  const products = await Product.find({ category: categoryId, active:true });
  if (!products || products.length < 1) {
    res.status(404).send({ message: "No se han encontrado productos en esa categoria" });
  } else {
    res.status(200).send(products);
  }
};

const getProductById = async (req, res) => {
  const { productId } = req.params
  const product = await Product.find({ _id: productId });
  if (!product || product.length < 1) {
    res.status(404).send({ message: "No se ha encontrado el producto" });
  } else {
    res.status(200).send(product);
  }
};

const getProducts = async (req, res) => {
  const products = await Product.find();
  if (!products || products.length < 1) {
    res.status(404).send({ message: "No se han encontrado productos" });
  } else {
    res.status(200).send(products);
  }
};

const updateProductById = async (req, res) => {
  const { productId } = req.params
  const productData = req.body;

  await Product.findByIdAndUpdate(
    { _id: productId },
    productData,
    (err, productUpdate) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (!productUpdate) {
          res.status(404).send({ message: "No se encontro el producto" });
        } else {
          res.status(200).send({ message: "Producto actualizado" });
        }
      }
    }
  );
};

const deleteProductById = (req, res) => {
  const { productId } = req.params

  Category.findByIdAndDelete({ _id: productId }, (err) => {
    if (err) {
      res.status(404).send({ message: "No se ha encontrado el producto" });
    } else {
      res.status(200).send({ message: "Producto eliminado con éxito" });
    }
  });
};

module.exports = {
  getProductsByCategory,
  getProductById,
  getProducts,
  createProduct,
  updateProductById,
  deleteProductById,
};
