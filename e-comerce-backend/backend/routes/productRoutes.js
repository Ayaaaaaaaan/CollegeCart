const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProductById,
} = require("../controller/productControllers");
// const { getVITProducts } = require("../controller/vitController");
// const { getBITSProducts } = require("../controller/bitsController");
// const { getIITSProducts } = require("../controller/iitsController");

router.get("/", getProducts);
router.get("/:id", getProductById);

// router.get("/vit", getVITProducts);
// router.get("/bits", getBITSProducts);
// router.get("/iits", getIITSProducts);

module.exports = router;
