import express from "express";
import {
  addToCart,
  clearCart,
  decreaseProductQty,
  removeProductFromCart,
  userCart,
} from "../Controllers/cart.js"; // function to handle adding to cart
import { isAuthenticated } from "../Middlewares/Auth.js"; // middleware to check auth

const router = express.Router();

// Route: Add to cart
// @route   POST /api/cart/add
// @access  Protected (only for authenticated users)
router.post("/add", isAuthenticated, addToCart);

// get user cart
router.get("/user", isAuthenticated, userCart);

// remove product from cart
router.delete("/remove/:productId", isAuthenticated, removeProductFromCart);

// clear cart
router.delete("/clear", isAuthenticated, clearCart);

// decrease qty
router.post("/--qty", isAuthenticated, decreaseProductQty);

export default router;
