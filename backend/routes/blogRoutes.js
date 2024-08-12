const express = require('express');
const { getBlogs, createBlog, updateBlog, deleteBlog } = require('../controllers/blogController');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

router.route('/')
  .get(getBlogs)
  .post(protect, upload.single('image'), createBlog);

router.route('/:id')
  .put(protect, upload.single('image'), updateBlog)
  .delete(protect, deleteBlog);

module.exports = router;
