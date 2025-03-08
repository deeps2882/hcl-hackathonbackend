/** @format */

import { Router } from "express";
import userRouter from "./user";
import allergyRouter from "./allergy";
const router = Router();

router.use("/user", userRouter);
router.use("/allergy", allergyRouter);

export default router;
