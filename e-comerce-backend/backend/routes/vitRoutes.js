// vitRoutes.js
const express = require("express");
const router = express.Router();
const { getVITProducts } = require("../controllers/vitController");

router.get("/", getVITProducts);

module.exports = router;

// bitsRoutes.js and iitsRoutes.js would be similar, just with different controller functions and routes.
