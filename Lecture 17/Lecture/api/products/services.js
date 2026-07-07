const products = [
  { id: 1, name: "ტოსტერი", price: 50 },
  { id: 2, name: "ტელევიზორი", price: 500 },
  { id: 3, name: "მაცივარი", price: 650 },
  { id: 4, name: "უთო", price: 70 },
];

const getProducts = (req, res) => {
  let { page = 1, take = 3 } = req.query;
  page = Number(page) || 1;
  take = Number(take) || 3;

  if (take > 3) {
    take = 3;
  }

  const start = (page - 1) * take;
  const end = page * take;

  res.json({ message: "success", data: products.slice(start, end) });
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((el) => el.id === Number(id));

  if (!product) {
    return res.status(404).json({ message: "Not Found", data: null });
  }

  res.json({ message: "success", data: product });
};

const createProduct = (req, res) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res
      .status(400)
      .json({ message: "name and price required field", data: null });
  }

  const lastId = products[products.length - 1]?.id || 0;
  const newProduct = {
    id: lastId + 1,
    name,
    price,
  };

  products.push(newProduct);

  res.status(201).json({ message: "added successfully", data: newProduct });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((el) => el.id === Number(id));

  if (index === -1) {
    return res.status(400).json({ message: "id is invalid", data: null });
  }

  const deletedProduct = products.splice(index, 1)[0];
  res.json({ message: "deleted successfully", data: deletedProduct });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price } = req.body;
  const index = products.findIndex((el) => el.id === Number(id));

  if (index === -1) {
    return res.status(400).json({ message: "id is invalid", data: null });
  }

  products[index] = {
    ...products[index],
    name: name ?? products[index].name,
    price: price ?? products[index].price,
  };

  res.json({ message: "updated successfully", data: products[index] });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
};
