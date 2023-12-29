import { NextFunction, Request, Response, Router } from "express";
import { RoleRoutes } from "./role.routes";
import { ErrorHandled } from "../utils/errorHandled";


export class Routes {

  public static routes() {
    const router = Router();
    router.use("/role", RoleRoutes.routes());

    router.use((err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof ErrorHandled) {
        res.status(err.status).send({ error: err.message });
      } else {
        res.status(500).send({ error: 'An unexpected error occurred' });
      }
    });

    return router;
  }
}