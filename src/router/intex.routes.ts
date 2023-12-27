import { Router } from "express";
import { RoleRoutes } from "./role.routes";


export class Routes {

  public static routes() {
    const router = Router();
    router.use("/role", RoleRoutes.routes());

    return router;
  }
}