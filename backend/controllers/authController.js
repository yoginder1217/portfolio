const asyncHandler = require('express-async-handler');
const Admin = require('../models/adminModel'); // Ensure the correct model path
const generateToken = require('../utils/generateToken'); // Ensure this path is correct

// @desc    Auth admin & get token
// @route   POST /api/admin/login
// @access  Public
const loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email });

  if (admin && (await admin.matchPassword(password))) {
    res.json({
      _id: admin._id,
      name: admin.name,
      email: admin.email,
      token: generateToken(admin._id),
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

module.exports = { loginAdmin };
