import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// @desc Register user
// @route POST /api/users/register
export const registerUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    return res.status(400).json({ message: "User already exists" });
  }

  const user = await User.create({
    fullname,
    email,
    password,
  });

  res.status(201).json({
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    token: generateToken(user._id),
  });
};

// @desc Login user
// @route POST /api/users/login
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  res.json({
    _id: user._id,
    fullname: user.fullname,
    email: user.email,
    token: generateToken(user._id),
  });
};

// @desc Get current user
// @route GET /api/users/me
export const getMe = async (req, res) => {
  res.json(req.user);
};
