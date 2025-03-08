/** @format */

import express from "express";
import router from "./router/index";
import { AppDataSource } from "./database/db";
import cors from "cors";

const app = express();
const port = 3000;

import dotenv from "dotenv";

dotenv.config(); // Load environment variables

app.use(express.json());
app.use(cors());

AppDataSource.initialize()
  .then(() => {
    console.log("📌 Database connected successfully");
  })
  .catch((error) => {
    console.error("❌ Database connection error:", error);
  });

app.get("/", (req: any, res: any) => {
  console.log("Hello Server Started");
  res.send("Hello Server Started");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api", router);
