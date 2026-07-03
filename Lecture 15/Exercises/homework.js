/**
 * შექმენი შენი სერვერი express-ის დახმარებით. ააწყე User-ის CRUD, რომელსაც ექნება: დამატება, წაშლა, აფდეითი,
 * id-ის მიხედვით ინფორმაციის წამოღება, ფეჯინეიშენი, სექრეთ როუტი, age და name იყოს აუცილებელი ფილდი,
 * ხოლო email და eyecolor ოფშენალი. ასევე არ უნდა შეეძლოს 30 წელზე მეტის დარექვესთება და 10 წელზე ნაკლების.
 */

const express = require("express");
const { readFile, writeFile } = require("./utils/helper");
const app = express();

const DB_PATH = "data/users.json";
const PORT = 8080;

app.use(express.json());

async function readDB() {
  return await readFile(DB_PATH, true);
}

async function save(user) {
  return await writeFile(DB_PATH, user);
}

// --- GET by id ---
app.get("/api/:id", async (req, res) => {
  const { id } = req.params;
  let users = await readDB();
  let findUser = users.find((el) => el.id === +id);
  if (!findUser) {
    return res
      .status(404)
      .json({ message: "not found (Id is invalid)", data: null });
  }
  return res
    .status(200)
    .json({ message: "found successfully", data: findUser });
});

// --- GET (Pagination) ---
app.get("/api", async (req, res) => {
  let { page = 1, take = 5 } = req.query;
  const users = await readDB();
  res.json(users.slice((page - 1) * take, page * take));
});

// --- POST (add new user) ---
app.post("/api/add", async (req, res) => {
  let { name, age, email, eyeColor } = req.body;
  if (!name || age === undefined) {
    return res
      .status(400)
      .json({ message: "Missing required fields (Name or age is empty" });
  }
  if (age < 10 || age > 30) {
    return res.status(400).json({ message: "age must be between 10 and 30" });
  }
  let users = await readDB();
  const lastId = users.length ? users[users.length - 1].id : 0;
  let newUser = {
    id: lastId + 1,
    name,
    age,
    ...(email && { email }),
    ...(eyeColor && { eyeColor }),
  };
  users.push(newUser);
  await save(users);
  res.status(201).json({
    message: "New user added. DB was updated successfully",
    data: users,
  });
});

// --- DELETE (remove user) ---
app.delete("/api/remove/:id", async (req, res) => {
  const { id } = req.params;
  let users = await readDB();
  const index = users.findIndex((el) => el.id === +id);
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid" });
  }
  const deleteUser = users.splice(index, 1);
  await save(users);
  res.json({ message: "deleted successfully", data: deleteUser });
});

// --- PUT (update user) ---
app.put("/api/update/:id", async (req, res) => {
  const { id } = req.params;
  const { name, age, email, eyeColor } = req.body;
  if (age !== undefined && (age < 10 || age > 30)) {
    return res.status(400).json({ message: "age must be between 10 and 30" });
  }
  let users = await readDB();
  const index = users.findIndex((el) => el.id === +id);
  if (index === -1) {
    return res.status(400).json({ message: "id is invalid" });
  }
  users[index] = {
    ...users[index],
    name: name || users[index].name,
    age: age || users[index].age,
    email: email || users[index].email,
    eyeColor: eyeColor || users[index].eyeColor,
  };
  await save(users);
  res.json({ message: "updated successfully", data: users[index] });
});

// --- GET (secret key) ---
app.get("/secret", async (req, res) => {
  const secretKey = req.headers.secretkey;
  if (!secretKey || secretKey != "1369") {
    return res.status(401).json({ message: "Unauthorized", data: "Denied" });
  }
  let users = await readDB();
  return res.status(200).json({ message: "Showing full data", data: users });
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
