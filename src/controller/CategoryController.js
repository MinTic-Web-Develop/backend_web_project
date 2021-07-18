const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const categories = await Category.find();

  if (!categories || categories.length < 1) {
    res.status(404).send({ message: "No se han encontrado categorias" });
  } else {
    res.status(200).send(categories);
  }
};
const getCategoryById = (req, res) => {
  const params = req.params;
  Category.findOne({ _id: params.id }, (err, category) => {
    if (err) {
      res.status(500).send({ messagen: "Error en el servidor" });
    } else {
      if (!category) {
        res.status(404).send({ message: "Categoria no encontrada" });
      } else {
        res.status(200).send(category);
      }
    }
  });
};

const createCategory = (req, res) => {
  const category = new Category();
  const { name, active, imgUrl } = req.body;
  category.name = name;
  category.active = active;
  category.imgUrl = imgUrl;
  category.save((err, categoryStored) => {
    if (err) {
      res.status(500).send({ message: "La categoria ya existe" });
    } else {
      if (!categoryStored) {
        res.status(500).send({ message: "Error al guardar la categoria" });
      } else {
        res.status(200).send({ category: categoryStored });
      }
    }
  });
};

const deleteCategory = (req, res) => {
  const params = req.params;

  Category.findByIdAndDelete({ _id: params.id }, (err) => {
    if (err) {
      res.status(404).send({ message: "No se ha encontrado la categoria" });
    } else {
      res.status(200).send({ message: "Categoria eliminada" });
    }
  });
};

const updateCategory = (req, res) => {
  const params = req.params;
  const categoryData = req.body;

  Category.findByIdAndUpdate(
    { _id: params.id },
    categoryData,
    (err, categoryUpdate) => {
      if (err) {
        res.status(500).send({ message: "Error en el servidor" });
      } else {
        if (!categoryUpdate) {
          res.status(404).send({ message: "No se encontro la categoria" });
        } else {
          res.status(200).send({ message: "Categoria actualizada" });
        }
      }
    }
  );
};

module.exports = {
  getCategories,
  createCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
};
