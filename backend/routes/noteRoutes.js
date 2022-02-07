const express = require("express");
const { getNotes, createNote } = require("../controllers/noteControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();
router.route('/').get(protect,getNotes);
router.route("/create").post(protect,createNote);

module.exports = router;