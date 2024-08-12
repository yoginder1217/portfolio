const express = require('express');
const { createSkill, getSkills, updateSkill, deleteSkill } = require('../controllers/skillController');
const router = express.Router();

router.post('/create', createSkill);
router.get('/get', getSkills);
router.put('/update/:id', updateSkill);
router.delete('/delete/:id', deleteSkill);

module.exports = router;
