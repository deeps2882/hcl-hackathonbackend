/** @format */
/** @format */

import { Router } from "express";
import { userController } from "../controller/user";
import { authenticateJWT } from "../utility/helper";
const userRouter = Router();

userRouter.get("/", authenticateJWT, userController.getAllUser);
userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.post("/doctor-map", userController.doctorMap);

export default userRouter;
