/** @format */
/** @format */

import { Router } from "express";
import { userController } from "../controller/user";
const userRouter = Router();

userRouter.get("/", userController.getAllUser);
userRouter.post("/signup", userController.signup);

export default userRouter;
