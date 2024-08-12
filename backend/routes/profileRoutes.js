const express = require('express');
const router = express.Router();
const {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
} = require('../controllers/profileController');
// const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProfile)
  .post(createProfile); // Removed protect temporarily

router.route('/:id')
  .put(updateProfile) // Removed protect temporarily
  .delete(deleteProfile); // Removed protect temporarily

module.exports = router;
