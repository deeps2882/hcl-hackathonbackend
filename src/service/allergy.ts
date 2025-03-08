/** @format */

import { AppDataSource } from "../database/db";
import { Allergy } from "../entities/allergy";

export const AllergyService = {
  getAllAllergy: async () => {
    try {
      const allergyRepository = AppDataSource.getRepository(Allergy);
      const allergy = await allergyRepository.find();
      return allergy;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },
};
