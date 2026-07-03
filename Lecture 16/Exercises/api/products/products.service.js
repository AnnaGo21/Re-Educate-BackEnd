const products = [
  {
    id: 1,
    name: "Laptop",
    price: 150,
    category: "Electronics",
    isExpire: false,
  },
  {
    id: 2,
    name: "Phone",
    price: 120,
    category: "Electronics",
    isExpire: false,
  },
  { id: 3, name: "Shirt", price: 30, category: "Clothing", isExpire: false },
  { id: 4, name: "Bread", price: 5, category: "Food", isExpire: true },
  { id: 5, name: "Milk", price: 3, category: "Food", isExpire: true },
];

const getProducts = (req, res) => {
  let { page = 1, take = 3 } = req.query;
  if (take > 3) take = 3;

  const data = products.slice((page - 1) * take, page * take);
  res.json({ message: "success", data: data });
};

const getProductById = (req, res) => {
  const { id } = req.params;
  const product = products.find((el) => el.id === +id);

  if (!product) {
    return res.status(404).json({ message: "Product not found", data: null });
  }

  res.json({ message: "success", data: product });
};

const createProduct = (req, res) => {
  const { name, price, category, isExpire } = req.body;

  if (!name || price === undefined || !category || isExpire === undefined) {
    return res.status(400).json({
      message: "Required fields missing",
    });
  }

  if (price > 200) {
    return res.status(400).json({ message: "Price cannot be more than 200" });
  }

  const lastId = products[products.length - 1]?.id || 0;
  const newProduct = { id: lastId + 1, name, price, category, isExpire };

  products.push(newProduct);
  res
    .status(201)
    .json({ message: "Product was added successfully", data: newProduct });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const index = products.findIndex((p) => p.id === +id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found", data: null });
  }

  const deleted = products.splice(index, 1)[0];
  res.json({ message: "Product was deleted", data: deleted });
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, price, category, isExpire } = req.body;
  const index = products.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "Not found", data: null });
  }

  if (price !== undefined && price > 200) {
    return res.status(400).json({ message: "Price cannot be more than 200" });
  }

  products[index] = {
    ...products[index],
    name: name ?? products[index].name,
    price: price ?? products[index].price,
    category: category ?? products[index].category,
    isExpire: isExpire ?? products[index].isExpire,
  };

  res.json({ message: "Product was updated", data: products[index] });
};

const getSecretProducts = (req, res) => {
  res.json({ message: "All products", data: products });
};

module.exports = {
  getProducts,
  getProductById,
  createProduct,
  deleteProduct,
  updateProduct,
  getSecretProducts,
};
