module.exports = (req, res, next) => {
  const role = req.headers.role;

  if (!role || role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access is denied. Only admin has acess" });
  }

  next();
};
