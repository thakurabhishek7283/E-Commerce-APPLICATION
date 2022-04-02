const {
  getUser,
  getUsers,
  getCount,
  deleteUser,
  updateUser,
  signin,
  signup,
} = require("../controllers/user");

const express = require("express");
const router = express.Router({ mergeParams: true });

router.get("/", getUsers);
router.get("/:userId", getUser);
router.get("/count", getCount);
router.post("/signup", signup);
router.post("/signin", signin);
router.put("/:userId", updateUser);
router.delete("/:userId", deleteUser);
