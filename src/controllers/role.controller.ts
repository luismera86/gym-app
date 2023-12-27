import { Request, Response } from "express";
import { RoleService } from "../services/role.service";
import { log } from "console";



export class RoleController {

  private roleServices: RoleService = new RoleService();


  getAll = async (req: Request, res: Response) => {
    try {
      // const roleService: RoleService = new RoleService();
      const roles = await this.roleServices.getAll();
      console.log(roles);


      res.status(200).json({
        ok: true,
        roles
      });

    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        error: 'Error interno del servidor',
      });
    }
  }

  getOneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.getOneById(id);
      res.status(200).json({
        ok: true,
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        error: 'Error interno del servidor',
      });
    }
  }

  createOne = async (req: Request, res: Response) => {
    try {
      const data = req.body;
      const role = await this.roleServices.createOne(data);
      res.status(200).json({
        ok: true,
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        error: 'Error interno del servidor',
      });
    }
  }

  updateOneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const role = await this.roleServices.updateOneById(id, data);
      res.status(200).json({
        ok: true,
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        error: 'Error interno del servidor',
      });
    }
  }

  deleteOneById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const role = await this.roleServices.deleteOneById(id);
      res.status(200).json({
        ok: true,
        role
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        ok: false,
        error: 'Error interno del servidor',
      });
    }
  }


}