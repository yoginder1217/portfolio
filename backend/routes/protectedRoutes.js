const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

router.get('/dashboard', auth, (req, res) => {
  res.json({ message: 'Welcome to the Dashboard!' });
});

module.exports = router;
