// import { print, reverseStr, sum } from "./utils/helper.js";

// console.log(sum(5, 6));
// print("Watermelon");
// console.log(reverseStr("Watermelon"));

// Start the server
const http = require("http");
const url = require("url");
const fs = require("fs/promises");
const queryString = require("querystring");
const PORT = 8080;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "content-type": "application.json" });

  // query parse
  const parsedURL = url.parse(req.url);
  const query = queryString.parse(parsedURL.query);
  console.log(query);

  // ------------------------------------------------

  //readUsers + parse
  const readUserData = await fs.readFile("users.json", "utf-8");
  const parseUserData = JSON.parse(readUserData);

  // ------------------------------------------------

  //readPosts + parse
  const readPostsData = await fs.readFile("posts.json", "utf-8");
  const parsePostsData = JSON.parse(readPostsData);

  // ------------------------------------------------

  if (parsedURL.pathname === "/") {
    return res.end("avto");
  } else if (parsedURL.pathname === "/users") {
    // get by id
    if (query.id) {
      const findUserById = parseUserData.find(
        (el) => el.id === Number(query.id),
      );
      if (!findUserById) {
        return res.end("user not found");
      }
      return res.end(JSON.stringify(findUserById));
    }

    // return all users /users
    return res.end(JSON.stringify(parseUserData));
  } else if (parsedURL.pathname === "/posts") {
    let { page = 1, take = 30 } = query;
    if (take > 30) {
      take = 30;
    }
    const result = parsePostsData.slice((page - 1) * take, page * take);
    return res.end(JSON.stringify(result));
  }
});
server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

// const server = http.createServer(async (req, res) => {
//   //ავტომატურად რექვესთდება ამაზე და ამ ქვედა ლაინის გარეშე, ამიტომ აკონსოლებდა ორჯერ
//   if (req.url === "/favicon.ico") return res.end();

//   res.writeHead(200, { "content-type": "application.json" });
//   console.log("Got response from server");
//   console.log(req.url);
//   return res.end("First JSON response");
// });

// server.listen(PORT, () => {
//   console.log(`Server started on http://localhost:${PORT}`);
// });
