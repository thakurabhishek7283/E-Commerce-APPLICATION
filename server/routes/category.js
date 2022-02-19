const {
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
  createCategory,
} = require("../controllers/category");

const express = require("express");
const router = express.Router();

router.get("/", getCategories);
router.get("/:id", getCategory);
router.delete("/:id", deleteCategory);
router.put("/:id", updateCategory);
router.post("/", createCategory);

module.export = router;
