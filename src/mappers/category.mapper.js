const toCategory = ( CategoryObj ) => ({
    _id: CategoryObj._id,
    name: CategoryObj.name,
    description: CategoryObj.description,
    imgURL: CategoryObj.imgURL,
    active: CategoryObj.active,
    node: CategoryObj.node,
});

const mappers = {
  toCategory,
};

export default mappers;
