import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
module.exports = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const decoded = jwt.verify(token!, process.env.JWT_SECRET!);
    Object.assign(req, { userData: decoded });
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Authentification Failed",
    });
  }
};
