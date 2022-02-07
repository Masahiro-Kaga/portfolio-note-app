const express = require("express");
const { getNotes } = require("../controllers/noteControllers");

const router = express.Router();
router.route('/').get(getNotes);

module.exports = router;