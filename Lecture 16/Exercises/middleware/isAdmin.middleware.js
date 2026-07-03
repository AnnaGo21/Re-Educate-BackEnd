module.exports = (req, res, next) => {
  const role = req.headers.role;

  if (!role || role !== "admin") {
    return res.status(403).json({ message: "Access id denied" });
  }

  next();
};
