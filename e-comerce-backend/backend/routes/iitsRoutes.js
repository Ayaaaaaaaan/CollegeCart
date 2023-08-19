// iitsRoutes.js
const express = require("express");
const router = express.Router();
const { getIITSProducts } = require("../controllers/iitsController");

router.get("/", getIITSProducts);

module.exports = router;

// bitsRoutes.js and iitsRoutes.js would be similar, just with different controller functions and routes.
