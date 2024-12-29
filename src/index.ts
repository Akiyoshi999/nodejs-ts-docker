import express, { Request, Response, NextFunction } from "express";
import env from "dotenv";
env.config();

const app = express();
app.use(express.json());

app.get("/", (req, res): void => {
  res.status(200).send("Hello Typescript!");
});

export default app;
