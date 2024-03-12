import { Router } from "express";
import { login, register } from "../controllers/authController";

export const authRouter = Router();

// todo?: add validation
authRouter.post("/login", login);
authRouter.post("/register", register);
