const { Router } = require("express");
const {
  getPosts,
  getPostById,
  createPost,
  deletePost,
  updatePost,
} = require("./posts.service");

const postsRouter = Router();

postsRouter.get("/", getPosts);
postsRouter.get("/:id", getPostById);
postsRouter.post("/", createPost);
postsRouter.delete("/:id", deletePost);
postsRouter.put("/:id", updatePost);

module.exports = postsRouter;
