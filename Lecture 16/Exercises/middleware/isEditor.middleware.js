module.exports = (req, res, next) => {
  const role = req.headers.role;

  if (!role || (role !== "editor" && role !== "admin")) {
    return res
      .status(403)
      .json({ message: "Access is denied. Only admin or editor has acess" });
  }

  next();
};
