const Product = require("../models/ProductVIT");

const getVITProducts = async (req, res) => {
  try {
    // Your logic to fetch VIT products
    const vitProducts = await Product.find({}); // Replace "college" with the actual field name in your product schema that represents the college
    res.json(vitProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Other VIT-specific controller functions if needed

module.exports = {
  getVITProducts,
  // Other exported VIT-specific controller functions
};
