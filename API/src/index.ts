import express from "express";
import dotenv from "dotenv";

import { userRouter } from "./routes/userRouter";

dotenv.config();

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
