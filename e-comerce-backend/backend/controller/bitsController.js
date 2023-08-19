const Product = require("../models/ProductBITS");

const getBITSProducts = async (req, res) => {
  try {
    // Your logic to fetch BITS products
    const bitsProducts = await Product.find({}); // Replace "college" with the actual field name in your product schema that represents the college
    res.json(bitsProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// Other BITS-specific controller functions if needed

module.exports = {
  getBITSProducts,
  // Other exported BITS-specific controller functions
};
