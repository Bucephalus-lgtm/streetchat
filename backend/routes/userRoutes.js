const express = require("express");
const {
  registerUser,
  authUser,
  allUsers,
  listUsers,
} = require("../controllers/userControllers");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").get(protect, allUsers);
router.route("/listAll").get(listUsers);
router.route("/").post(registerUser);
router.post("/login", authUser);

module.exports = router;
