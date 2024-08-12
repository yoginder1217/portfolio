const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/authController'); // Ensure the correct path

router.post('/login', loginAdmin); // Ensure the function is correctly passed

module.exports = router;
