const express = require("express");
const app = express();
const connectToMongo = require("./config/connectToMongoDB");
connectToMongo();
const bookRouter = require("./api/book.route");
app.use(express.json());
app.use("/books", bookRouter);

const PORT = 3030;

/**
 * თქვენი მიზანია ააწყოთ CRUD დაამატეთ თქვენი სურვილით ჩეკები და ფიჩერები.
 * არ ხართ შეზღუდული, მთავარია როუტებათ და სერვისებათ დაყოთ.
 * ასევ ეკონფიგში გქონდეთ ქონექთ მონგო .env დან ამოიღეთ URI და ცალკე გქონდეთ schema.
 */

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
