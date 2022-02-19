const {
  getOrder,
  getOrders,
  getOrderbyUser,
  getCount,
  getTotalSale,
  createOrder,
  deleteOrder,
} = require("../controllers/order");

const express = require("express");
const router = express.Router();

router.get("/:id", getOrder);
router.get("/", getOrders);
router.get("/user/:userid", getOrderbyUser);
router.get("/count", getCount);

router.get("/sales", getTotalSale);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);

module.export = router;
