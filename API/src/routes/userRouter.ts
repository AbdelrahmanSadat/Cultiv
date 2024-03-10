import express from "express";
import userController from "../controllers/userController";
import { validate } from "../../middleware/validate";
import { z } from "zod";
import { createUserSchema } from "../../lib/validations/user";

export const userRouter = express.Router();

userRouter.get("/users",  userController.getUser);

userRouter.post("/users", validate(createUserSchema, "body"), userController.createUser);

userRouter.get("/users/:id", userController.getUser);

userRouter.delete("/users/:id", userController.deleteUser);

userRouter.patch("/users/:id", userController.updateUser);

