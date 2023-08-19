const Product = require("../models/ProductIITS");

const getIITSProducts = async (req, res) => {
  try {
    // Your logic to fetch IITs products
    const iitsProducts = await Product.find({}); // Replace "college" with the actual field name in your product schema that represents the college
    res.json(iitsProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Other IITs-specific controller functions if needed

module.exports = {
  getIITSProducts,
  // Other exported IITs-specific controller functions
};
