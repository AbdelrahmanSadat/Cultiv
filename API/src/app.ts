import express from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes/userRouter";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);

export default app