/** @format */

import { Router } from "express";
import { allergyController } from "../controller/allergy";
// import { authenticateJWT } from "../utility/helper";
const allergyRouter = Router();

allergyRouter.get("/", allergyController.getAllergy);

export default allergyRouter;
