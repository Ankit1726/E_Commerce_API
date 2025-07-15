import express from "express";
import { login, register } from "../Controllers/user.js";

const router = express.Router();

// Register
// @api : /api/user/register
router.post("/register", register);

// Login
//@api : /api/user/login
router.post("/login", login);

export default router;
