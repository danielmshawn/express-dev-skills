var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills. Only "/" below because all actual
// paths start with /skills, as said above.
router.get('/', skillsCtrl.index);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
