import mapper from '../mappers/category.mapper';
const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const categories = await Category.find({node : false });
  console.log('entro');
  if (!categories || categories.length < 1) {
    res.status(404).send({ message: "No se han encontrado categorias" });
  } else {
    res.status(200).send(categories);
  }
};

const getSubCategoriesByCategory = async (req, res) => {
  const { categoryId } = req.params
  const subcategories = await Category.find({node_id : categoryId });
  res.status(200).send(subcategories);
}

const getAllCategories = async (req, res) => {
  const categories = await Category.find({node: false});
  const info = [];
  await Promise.all(
      categories.map(async (category)=>{
          const subcategories = await Category.find({ node_id: category._id});
          if( subcategories != ''){
              const data = mapper.toCategory(category);
              data.subcategories = subcategories;
              info.push(data);
          }
          else{
              info.push(category);
          }
      }),
  );
  res.status(200).send(info);
}

const getCategoryById = (req, res) => {
  const { categoryId } = req.params;
  Category.findOne({ _id: categoryId }, (err, category) => {
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

  const { name, description, imgURL, active, node, node_id } = req.body;
  if (node != false){
    const category = new Category({ name , description, imgURL, active, node, node_id});
    category.save((err, categoryStored) => {
      if (err) {
        res.status(500).send({ message: "La subcategoria ya existe" });
      } else {
        if (!categoryStored) {
          res.status(500).send({ message: "Error al guardar la subcategoria" });
        } else {
          res.status(200).send({ message: "Subcategoria creada con éxito"});
        }
      }
    });
  }
  else{
    const subcategory = new Category({ name , description, imgURL, active, node});
    category.save((err, categoryStored) => {
      if (err) {
        res.status(500).send({ message: "La categoria ya existe" });
      } else {
        if (!categoryStored) {
          res.status(500).send({ message: "Error al guardar la categoria" });
        } else {
          res.status(200).send({ message: "Categoria creada con éxito"});
        }
      }
    });
  }
};

const deleteCategoryById = (req, res) => {
  const { categoryId } = req.params

  Category.findByIdAndDelete({ _id: categoryId }, (err) => {
    if (err) {
      res.status(404).send({ message: "No se ha encontrado la categoria" });
    } else {
      res.status(200).send({ message: "Categoria eliminada" });
    }
  });
};

const updateCategoryById = (req, res) => {
  const { categoryId } = req.params
  const categoryData = req.body;

  Category.findByIdAndUpdate(
    { _id: categoryId },
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
  getAllCategories,
  getSubCategoriesByCategory,
  createCategory,
  deleteCategoryById,
  updateCategoryById,
  getCategoryById,
};
