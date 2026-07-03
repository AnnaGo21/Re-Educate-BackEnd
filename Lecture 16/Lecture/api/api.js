const { Router } = require("express");
const animalsRouter = require("./animals/animals.routes");
const usersRouter = require("./users/users.routes");
const postsRouter = require("./posts/posts.routes");

const apiRouter = Router();

apiRouter.use("/animals", animalsRouter);
// apiRouter.use("/users", usersRouter);
apiRouter.use("/posts", postsRouter);

module.exports = apiRouter;
