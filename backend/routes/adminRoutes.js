const express = require('express');
const router = express.Router();
const { authAdmin } = require('../controllers/adminController');

router.post('/login', authAdmin);

module.exports = router;
