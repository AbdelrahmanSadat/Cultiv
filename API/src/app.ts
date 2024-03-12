import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import { userRouter } from "./routes/userRouter";
import { contactRouter } from "./routes/contactRouter";
import { authRouter } from "./routes/authRouter";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);
app.use(contactRouter);
app.use(authRouter);

export default app;
