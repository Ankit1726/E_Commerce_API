import dotenv from "dotenv";
dotenv.config();

import express from "express";
import connectDB from "./config/db.js";
import userRouter from "./Routes/user.routes.js";
import productRouter from "./Routes/product.routes.js";
import cartRouter from './Routes/cart.routes.js'
// Database Connection
connectDB();

const app = express();
app.use(express.json());

//user router
app.use("/api/user", userRouter);

//product user
app.use("/api/product", productRouter);

// cart Router
app.use("/api/cart",cartRouter);


const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server is started at port ${port} `);
});
