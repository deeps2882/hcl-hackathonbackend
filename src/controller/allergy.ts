/** @format */

import { Request, Response } from "express";

import { AllergyService } from "../service/allergy";

export const allergyController = {
  getAllergy: async (req: Request, res: Response) => {
    try {
      const users = await AllergyService.getAllAllergy();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
