module.exports = (req, res, next) => {
  const admin = req.headers.admin;

  if (!admin || admin !== "admin") {
    return res
      .status(400)
      .json({
        message: "სამწუხაროდ არ ხარ ავტორიზირებული, ვერ მიიღებ ინფორმაციას",
      });
  }

  next();
};
