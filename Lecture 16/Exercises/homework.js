/**
 * შექმენი შენი სერვერი express-ის დახმარებით. ააწყე Products-ის CRUD, რომელსაც ექნება: დამატება, წაშლა, აფდეითი,
 * id-ის მიხედვით ინფორმაციის წამოღება, ფეჯინეიშენი, სექრეთ როუტი.
 *  price, category, isExpire და name უნდა იყოს აუცილებელი ფილდები.
 * ასევე არ უნდა შეეძლოს price > 200 მეტის დარექვესთება.
 * დაამატე Routes, Services და middleWare[isadmin]-ს უნდა შეეძლოს წაშლა და აფეითი. isEditor-ს მარტო აფდეითი.
 */

const express = require("express");
const apiRouter = require("./api/api");

const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
