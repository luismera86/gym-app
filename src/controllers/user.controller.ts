import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

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
  }

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
  }

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      const user = await this.userService.createOne(req.body);
      res.status(201).json({
        status: "success",
        payload: user,
      });
    } catch (error) {
      next(error);
    }
  }

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
  }

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
  }

  addSubscription = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id, idSubscription } = req.params;
      const user = await this.userService.addSubscription(id, idSubscription);
      res.status(200).json({
        status: "success",
        payload: user,
      });
      
    } catch (error) {
      next(error);
    }
  }

}