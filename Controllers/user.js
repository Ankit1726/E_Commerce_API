import { User } from "../Models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// user register
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user)
    return res.json({ message: "User already exists..", success: false });

  const hashPassword = await bcrypt.hash(password, 10);

  user = await User.create({
    name,
    email,
    password: hashPassword,
  });

  res.json({ message: "User Register Success..", user, success: true });
};

// user login
export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) return res.json({ message: "User not exists", success: false });

  // Compare user input pass as already saved in database.
  const validPassword = await bcrypt.compare(password, user.password);

  if (!validPassword)
    return res.json({ message: "Invalid Password", success: false });

  const token = jwt.sign({ userId: user._id }, process.env.JWT, {
    expiresIn: "1d",
  });

  res.json({ message: `welcome ${user.name}`, token, success: true });
};
