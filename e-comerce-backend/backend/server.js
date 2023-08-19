require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const cartRoutes = require("./routes/cartRoutes");
// const vitRoutes = require("./routes/vitRoutes"); // Add this
// const bitsRoutes = require("./routes/bitsRoutes"); // Add this
// const iitsRoutes = require("./routes/iitsRoutes"); // Add this
const { connectDB } = require("./config/db");
const cors = require("cors");

connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});

app.use("/api/products", productRoutes);
app.use("/api/user", userRoutes);
app.use("/api/cart", cartRoutes);
// app.use("/api/vit", vitRoutes); // Add this
// app.use("/api/bits", bitsRoutes); // Add this
// app.use("/api/iits", iitsRoutes); // Add this

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
