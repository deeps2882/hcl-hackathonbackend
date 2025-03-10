/** @format */

import { Request, Response } from "express";

import { UserService } from "../service/user";

export const userController = {
  signup: async (req: Request, res: Response) => {
    try {
      const users = await UserService.signup(req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  login: async (req: Request, res: Response) => {
    try {
      const users = await UserService.login(req.body, res);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getAllUser: async (req: Request, res: Response) => {
    try {
      const users = await UserService.getAllUser();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  getUserDetail: async (req: Request, res: Response) => {
    try {
      let id = +req.params.id;
      console.log("id", id);
      const users = await UserService.getUserDetail(id);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  updateUserDetail: async (req: Request, res: Response) => {
    try {
      const users = await UserService.updateUserDetail(req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
  doctorMap: async (req: Request, res: Response) => {
    try {
      const users = await UserService.doctorMap(req.body);
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};
