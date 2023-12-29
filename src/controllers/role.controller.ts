import { NextFunction, Request, Response } from "express";
import { RoleService } from "../services/role.service";

export class RoleController {

  private roleServices: RoleService = new RoleService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roles = await this.roleServices.getAll();
      res.status(200).json({
        status: "success",
        payload: roles
      });
    } catch (error) {
      next(error);
    }
  }

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.getOneById(id);
      res.status(200).json({
        status: "success",
        payload: role
      });
    } catch (error) {
      next(error);
    }
  }

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const role = await this.roleServices.createOne(data);
      res.status(200).json({
        status: "success",
        payload: role
      });
    } catch (error) {
      next(error);
    }
  }

  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const role = await this.roleServices.updateOneById(id, data);
      res.status(200).json({
        status: "success",
        payload: role
      });
    } catch (error) {
      next(error);
    }
  }

  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.deleteOneById(id);
      res.status(200).json({
        status: "success",
        payload: role
      });
    } catch (error) {
      next(error);
    }
  }
}