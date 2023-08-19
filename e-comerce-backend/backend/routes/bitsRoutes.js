// bitsRoutes.js
const express = require("express");
const router = express.Router();
const { getBITSProducts } = require("../controllers/bitsController");

router.get("/", getBITSProducts);

module.exports = router;

// bitsRoutes.js and iitsRoutes.js would be similar, just with different controller functions and routes.
