const asyncHandler = require('express-async-handler');
const Blog = require('../models/blogModel');

// Get all blogs
const getBlogs = asyncHandler(async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

// Create new blog
const createBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error('Title and content are required');
  }

  const blog = new Blog({
    title,
    content,
    image: req.file ? req.file.path : null,
  });

  const createdBlog = await blog.save();
  res.status(201).json(createdBlog);
});

// Update blog
const updateBlog = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  if (!title || !content) {
    res.status(400);
    throw new Error('Title and content are required');
  }

  const blog = await Blog.findById(req.params.id);

  if (blog) {
    blog.title = title;
    blog.content = content;
    blog.image = req.file ? req.file.path : blog.image;

    const updatedBlog = await blog.save();
    res.json(updatedBlog);
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

// Delete blog
const deleteBlog = asyncHandler(async (req, res) => {
  const blog = await Blog.findById(req.params.id);

  if (blog) {
    await blog.remove();
    res.json({ message: 'Blog removed' });
  } else {
    res.status(404);
    throw new Error('Blog not found');
  }
});

module.exports = {
  getBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
};
