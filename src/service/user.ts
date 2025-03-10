/** @format */

import { PatientDoctorMaster } from "../entities/patientDoctorMaster";
import { AppDataSource } from "../database/db";
import { User } from "../entities/user";
import jwt from "jsonwebtoken";

export const UserService = {
  signup: async (userData: any) => {
    try {
      const userRepository = AppDataSource.getRepository(User);

      // Check if the email already exists
      // const existingUser = await userRepository.findOne({
      //   where: { email: userData.email },
      // });
      // if (existingUser) {
      //   throw new Error("Email already in use");
      // }

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
  login: async (userData: any, res: any) => {
    try {
      const { email, password } = userData;

      if (!email || !password) {
        return res
          .status(400)
          .json({ message: "Email and password are required" });
      }

      const userRepository = AppDataSource.getRepository(User);
      const user = await userRepository.findOne({ where: { email } });

      if (!user) {
        return res.status(401).json({ message: "Invalid email or password" });
      }

      // Compare passwords
      // const isPasswordValid = await bcrypt.compare(password, user.password);
      if (user.password != password) {
        return res.status(401).json({ message: "Invalid email or password" });
      }
      const JWT_SECRET = process.env.JWT_SECRET as string;

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.id,
          email: user.email,
          role: user.role,
          name: user.name,
        },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        message: "Login successful",
        token,
        user: { id: user.id, name: user.name, email: user.email },
      });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  },

  getAllUser: async () => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.find();
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },

  getUserDetail: async (id: number) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      const users = await userRepository.findOneBy({ id });
      if (!users) {
        throw new Error("not data found");
      }
      return users;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },

  updateUserDetail: async (updatedData: any) => {
    try {
      const userRepository = AppDataSource.getRepository(User);
      let id = updatedData.id;
      const user = await userRepository.findOneBy({ id });
      if (!user) {
        throw new Error("User not found");
      }

      Object.assign(user, updatedData);

      await userRepository.save(user);

      return user;
    } catch (error) {
      console.error("Error updating user:", error);
      throw new Error("Failed to update user");
    }
  },

  doctorMap: async (data: any) => {
    try {
      const mapDoctorRepository =
        AppDataSource.getRepository(PatientDoctorMaster);
      let actualData = {
        doctorId: data.doctorId,
        patientId: data.patientId,
      };
      const mapDoctor = mapDoctorRepository.create(actualData);
      await mapDoctorRepository.save(mapDoctor);
      return mapDoctor;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  },
};
