import { Router } from "express";
import { UserController } from "../controllers/user.controller";

export class UserRoutes {

  public static routes() {
    const userController = new UserController();
    const router = Router();

    router.get("/", userController.getAll);
    router.get("/:id", userController.getOneById);
    router.post("/", userController.createOne);
    router.put("/:id", userController.updateOneById);
    router.delete("/:id", userController.deleteOneById);

    return router;
  }
}