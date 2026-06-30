//Used cjs file format, so Node will treat this file as CommonJS regardless of package type

const http = require("http");
const url = require("url");
const queryString = require("querystring");
const fs = require("fs/promises");
const { readFile } = require("./utils/helper");
const PORT = 8080;

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "content-type": "application/json" });

  const parsedURL = url.parse(req.url);
  const query = queryString.parse(parsedURL.query);

  const users = await readFile("data/users.json", true);
  const posts = await readFile("data/posts.json", true);

  if (parsedURL.pathname === "/") {
    return res.end("Welcome to the server");
  } else if (parsedURL.pathname === "/users") {
    if (query.id) {
      const user = users.find((el) => el.id === Number(query.id));
      if (!user) return res.end(JSON.stringify({ error: "user not found" }));
      return res.end(JSON.stringify(user));
    }

    if (query.name) {
      const filteredUsers = users.filter(
        (el) => el.name.toLowerCase() === query.name.toLowerCase(),
      );
      return res.end(JSON.stringify(filteredUsers));
    }

    let { page = 1, take = 10 } = query;
    page = Number(page);
    take = Number(take);
    if (take > 30) take = 30;
    const usersResult = users.slice((page - 1) * take, page * take);
    return res.end(JSON.stringify(usersResult));
  } else if (parsedURL.pathname === "/posts") {
    if (query.id) {
      const post = posts.find((el) => el.id === Number(query.id));
      if (!post) return res.end(JSON.stringify({ error: "post not found" }));
      return res.end(JSON.stringify(post));
    }

    let { page = 1, take = 10 } = query;
    page = Number(page);
    take = Number(take);
    if (take > 30) take = 30;
    const postsResult = posts.slice((page - 1) * take, page * take);
    return res.end(JSON.stringify(postsResult));
  }

  return res.end(JSON.stringify({ error: "route not found" }));
});

server.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});
