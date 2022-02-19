const {
  getProduct,
  getProducts,
  getFeaturedCount,
  createProduct,
  deleteProduct,
  updateProduct,
  uploadGalleryImages,
  countProducts,
} = require("../controllers/product");
const { storage } = require("../imageupload/cloudinary");
const multer = require("multer");

const express = require("express");
const router = express.Router({ mergeParams });

const upload = multer({ storage: storage });

router.get("/", getProducts);
router.get("/:productId", getProduct);
router.get("/featured/count", getFeaturedCount);
router.post("/", upload.single("images"), createProduct);
router.delete("/:productId", deleteProduct);
router.put("/:productId", updateProduct);
router.get("/count", countProducts);
router.post("/upload/images", upload.array("images"), uploadGalleryImages);
