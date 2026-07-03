const posts = [
  {
    id: 1,
    userId: 1,
    title: "first post",
    body: "hello from giorgi",
  },
  {
    id: 2,
    userId: 2,
    title: "second post",
    body: "hello from luka",
  },
  {
    id: 3,
    userId: 3,
    title: "third post",
    body: "hello from nika",
  },
];

const getPosts = (req, res) => {
  res.json({ message: "success", data: posts });
};

const getPostById = (req, res) => {
  const { id } = req.params;
  const post = posts.find((el) => el.id === Number(id));

  if (!post) {
    return res.status(404).json({ message: "post not found", data: null });
  }

  res.json({ message: "success", data: post });
};

const createPost = (req, res) => {
  const { userId, title, body } = req.body;

  if (!title) {
    return res.status(400).json({ message: "title is required", data: null });
  }

  const lastId = posts[posts.length - 1]?.id || 0;
  const newPost = {
    id: lastId + 1,
    userId,
    title,
    body,
  };

  posts.push(newPost);
  res.status(201).json({ message: "post created", data: newPost });
};

const deletePost = (req, res) => {
  const { id } = req.params;
  const index = posts.findIndex((el) => el.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "post not found", data: null });
  }

  const deletedPost = posts.splice(index, 1)[0];
  res.json({ message: "post deleted", data: deletedPost });
};

const updatePost = (req, res) => {
  const { id } = req.params;
  const { userId, title, body } = req.body;
  const index = posts.findIndex((el) => el.id === Number(id));

  if (index === -1) {
    return res.status(404).json({ message: "post not found", data: null });
  }

  posts[index] = {
    ...posts[index],
    userId: userId ?? posts[index].userId,
    title: title ?? posts[index].title,
    body: body ?? posts[index].body,
  };

  res.json({ message: "post updated", data: posts[index] });
};

module.exports = { getPosts, getPostById, createPost, deletePost, updatePost };
