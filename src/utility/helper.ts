/** @format */

import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
let JWT_SECRET = "123456@";

console.log(`testing env${process.env.JWT_SECRET}`);
// const JWT_SECRET = process.env.JWT_SECRET as string;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is not defined in environment variables.");
}

// Extend Express Request to include `user` property
declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const authenticateJWT = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // Attach user info to request
    next();
  } catch (error) {
    res.status(403).json({ message: "Forbidden: Invalid or expired token" });
  }
};
