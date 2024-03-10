import express from "express";
import userController from "../controllers/userController";

export const userRouter = express.Router();

userRouter.get("/users", userController.getUser);

userRouter.post("/users", userController.createUser);

userRouter.get("/users/:id", userController.getUser);

userRouter.delete("/users/:id", userController.deleteUser);

userRouter.patch("/users/:id", userController.updateUser);

