/** @format */

import express from "express";
import router from "./router/index";
import { AppDataSource } from "./database/db";
const app = express();
const port = 3000;

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
