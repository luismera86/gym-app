import { Router } from "express";
import { RoleController } from "../controllers/role.controller";

export class RoleRoutes {

  public static routes() {
    const roleController = new RoleController();
    const router = Router();

    router.get("/", roleController.getAll);
    router.get("/:id", roleController.getOneById);
    router.post("/", roleController.createOne);
    router.put("/:id", roleController.updateOneById);
    router.delete("/:id", roleController.deleteOneById);

    return router;
  }
}