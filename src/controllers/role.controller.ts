import { NextFunction, Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { log } from "console";



export class RoleController {

  private roleServices: RoleService = new RoleService();


  getAll = async (req: Request, res: Response) => {
    try {

      const roles = await this.roleServices.getAll();

      res.status(200).json({
        status: "success",
        roles
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        error: "Internal Server error",
      });
    }
  }

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.getOneById(id);
      console.log(role);
      res.status(200).json({
        status: "success",
        role
      });
    } catch (error) {
      next(error);
    }
  }

  createOne = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const role = await this.roleServices.createOne(data);
      res.status(200).json({
        status: "success",
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        error: "Internal Server error",
      });
    }
  }

  updateOneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const role = await this.roleServices.updateOneById(id, data);
      res.status(200).json({
        status: "success",
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        error: "Internal Server error",
      });
    }
  }

  deleteOneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.deleteOneById(id);
      res.status(200).json({
        status: "success",
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        status: "error",
        error: "Internal Server error",
      });
    }
  }


}