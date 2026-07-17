const express = require("express");
const app = express();
const PORT = 3030;
const connectToMongo = require("./config/connectToMongoDB");
const userRouter = require("./api/user.route");
require("dotenv").config();
app.use(express.json());
connectToMongo();

app.use("/users", userRouter);

app.get("/", (req, res) => {
  res.json("გავასწორე ერორი");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
