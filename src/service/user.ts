/** @format */

import { AppDataSource } from "../database/db";
import { User } from "../entities/user";

export const UserService = {
  signup: async (userData: any) => {
    try {
      const userRepository = AppDataSource.getRepository(User);

      // Check if the email already exists
      const existingUser = await userRepository.findOne({
        where: { email: userData.email },
      });
      if (existingUser) {
        throw new Error("Email already in use");
      }

      // Hash the password before saving
      //   const saltRounds = 10;
      //   const hashedPassword = await bcrypt.hash(userData.password, saltRounds);

      // Create the user
      const newUser = userRepository.create(userData);

      // Save user in DB
      await userRepository.save(newUser);

      console.log("User registered successfully:", newUser);
      return { message: "User registered successfully" };
    } catch (error) {
      console.error("Error during signup:", error);
      throw new Error("Failed to register user");
    }
  },
  getAllUser: async () => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.find();
      console.log(users);
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },
};
