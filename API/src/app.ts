import express from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes/userRouter";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);

export default app