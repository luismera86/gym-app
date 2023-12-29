import { NextFunction, Request, Response, Router } from "express";
import { RoleRoutes } from "./role.routes";
import { CustomError } from "../shared/utils/customError";


export class Routes {

  public static routes() {
    const router = Router();
    router.use("/role", RoleRoutes.routes());
    router.use((err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof CustomError) {
        return res.status(err.statusCode).json({ status: 'error', message: err.message });
      }
    
      // Si no es un error que conocemos, delegamos al manejador de errores por defecto de Express
      res.status(500).json({ status: 'error', message: 'An unexpected error occurred' });
    });

    return router;
  }
}