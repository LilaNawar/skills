//import express 
const express = require('express')

const router = express.Router();
// import controller
const skillsCntrl = require("../controller/skills.js")

router.get('/', skillsCntrl.index);
router.get('/new', skillsCntrl.newSkill)
router.post('/', skillsCntrl.addNewSkill)
router.get("/delete", skillsCntrl.delete_skill)


// catch all at the end
router.get('/:id', skillsCntrl.showSkill)








module.exports = router;