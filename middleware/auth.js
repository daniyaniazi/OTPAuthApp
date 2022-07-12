import jwt from "jsonwebtoken";
import { User } from "../models/users.js";

export const isAuthenticated = async (req, res, next) => {
  try {
      const { token } = req.cookies;
      console.log("token",token)

    if (!token) {
      return res.status(401).json({ success: false, message: "Login First" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded._id);
    if(!user) return res.status(401).json({ success: false, message: "Unauthorized user" });

    req.user = user
    next();
  } catch (error) {
      console.log(error)
    res.status(500).json({ success: false, message: error.message });
  }
};