import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";
import { User } from "@prisma/client";
import { hashedPassword } from "../utils/haspassword";
import { verifyToken } from "../utils/jwt";

export class UserController {
  private userService: UserService = new UserService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.userService.getAll();
      res.status(200).json({
        status: "success",
        payload: users,
      });
    } catch (error) {
      next(error);
    }
  };

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.getOneById(id);
      res.status(200).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    const userBody = req.body as User;

    try {
      const newUser = {
        ...userBody,
        password: hashedPassword(userBody.password),
      };

      const user = await this.userService.createOne(newUser);
      res.status(201).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  };

  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.updateOneById(id, req.body);
      res.status(200).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const user = await this.userService.deleteOneById(id);
      res.status(200).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  };

  addSubscription = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idSubscription } = req.params;
      // Check token user 
      const token = verifyToken(req.cookies.user);
      if(!token) throw new Error("Token is not valid")

      // get id from token
      const { id } = token as User

      const user = await this.userService.addSubscription(id, idSubscription);
      res.status(200).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  };

  // todo: add removeSubscription
  
  addTrainingDayHours = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { idTDH } = req.params;
      // Check token user
      const token = verifyToken(req.cookies.user);
      if (!token) throw new Error("Token is not valid")
      
      const { id } = token as User
      if (!id) throw new Error("Id is not valid")
      
      const user = await this.userService.addTrainingDayHours(idTDH, id);
      res.status(200).json({
        status: "success",
        payload: user,
      });
     
    } catch (error) {
      next(error);
    }
  };
}
