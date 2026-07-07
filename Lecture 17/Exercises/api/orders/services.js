const orders = [
  {
    id: 1,
    productName: "Laptop",
    quantity: 2,
    totalPrice: 400,
    status: "pending",
  },
  {
    id: 2,
    productName: "Phone",
    quantity: 5,
    totalPrice: 250,
    status: "shipped",
  },
  {
    id: 3,
    productName: "Headphones",
    quantity: 1,
    totalPrice: 50,
    status: "delivered",
  },
];

const getOrders = (req, res) => {
  let { page = 1, take = 3 } = req.query;

  if (take > 3) take = 3;
  const data = orders.slice((page - 1) * take, page * take);

  res.json({ message: "success", data: data });
};

const getSecretOrders = (req, res) => {
  res.json({ message: "success", data: orders });
};

const getOrderById = (req, res) => {
  const { id } = req.params;
  const order = orders.find((el) => el.id === +id);

  if (!order) {
    return res.status(404).json({ message: "order not found", data: null });
  }

  res.json({ message: "success", data: order });
};

const createOrder = (req, res) => {
  const { productName, quantity, totalPrice, status } = req.body;

  if (!productName) {
    return res
      .status(400)
      .json({ message: "productName is required field", data: null });
  }

  if (quantity > 10) {
    return res
      .status(400)
      .json({ message: "quantity cannot be more than 10", data: null });
  }

  if (totalPrice > 500) {
    return res
      .status(400)
      .json({ message: "totalPrice cannot be more than 500", data: null });
  }

  const lastId = orders[orders.length - 1]?.id || 0;
  const newOrder = {
    id: lastId + 1,
    productName,
    quantity,
    totalPrice,
    status,
  };

  orders.push(newOrder);

  res.status(201).json({ message: "added successfully", data: newOrder });
};

const deleteOrder = (req, res) => {
  const { id } = req.params;
  const index = orders.findIndex((el) => el.id === +id);

  if (index === -1) {
    return res.status(404).json({ message: "order not found", data: null });
  }

  const deletedOrder = orders.splice(index, 1)[0];
  res.json({ message: "deleted successfully", data: deletedOrder });
};

const updateOrder = (req, res) => {
  const { id } = req.params;
  const { productName, quantity, totalPrice, status } = req.body;
  const index = orders.findIndex((el) => el.id === +id);

  if (index === -1) {
    return res.status(404).json({ message: "order not found", data: null });
  }

  if (quantity > 10) {
    return res
      .status(400)
      .json({ message: "quantity cannot be more than 10", data: null });
  }

  if (totalPrice > 500) {
    return res
      .status(400)
      .json({ message: "totalPrice cannot be more than 500", data: null });
  }

  orders[index] = {
    ...orders[index],
    productName: productName ?? orders[index].productName,
    quantity: quantity ?? orders[index].quantity,
    totalPrice: totalPrice ?? orders[index].totalPrice,
    status: status ?? orders[index].status,
  };

  res.json({ message: "updated successfully", data: orders[index] });
};

const updateOrderStatus = (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const index = orders.findIndex((el) => el.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "order not found", data: null });
  }

  if (!status) {
    return res
      .status(400)
      .json({ message: "status is required field", data: null });
  }

  orders[index] = { ...orders[index], status };

  res.json({ message: "status updated successfully", data: orders[index] });
};

module.exports = {
  getOrders,
  getSecretOrders,
  getOrderById,
  createOrder,
  deleteOrder,
  updateOrder,
  updateOrderStatus,
};
