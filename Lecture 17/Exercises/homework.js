/**
 * შექმენი შენი სერვერი express-ის დახმარებით. ააწყე Orders-ის CRUD, რომელსაც ექნება: დამატება, წაშლა, აფდეითი,
 * id-ის მიხედვით ინფორმაციის წამოღება, ფეჯინეიშენი, სექრეთ როუტი, და შემდეგი ფილდები: productName, quantity, totalPrice, status.
 * productName უნდა იყოს აუცილებელი ფილდი.
 * ასევე არ უნდა შეეძლოს შეკვეთის დამატება, თუ quantity > 10 ან totalPrice > 500.
 * დაამატე Routes, Services და Middleware ფოლდერები.
 * [isAdmin-ს უნდა შეეძლოს წაშლა და აფდეითი, ხოლო isEditor-ს მხოლოდ status-ის შეცვლა.
 * ასევე დაამატე გლობალური logger middleware, რომელიც ლოგავს ყველა მოთხოვნას (method + url + დრო)]
 */

const express = require("express");
const apiRouter = require("./api/api");
const logger = require("./middlewares/logger.middleware");

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({ message: "Orders API is running" });
});

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`server started running on http://localhost:${PORT}`);
});
