import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { AuthController } from "../controllers/auth.controller";

export class UserRoutes {

  public static routes() {
    const userController = new UserController();
    const authController = new AuthController();
    const router = Router();

    router.get("/", userController.getAll);
    router.get("/:id", userController.getOneById);
    router.post("/login", authController.login);
    router.post("/", userController.createOne);
    router.put("/:id", userController.updateOneById);
    router.patch("/:id/:idSubscription", userController.addSubscription);
    router.delete("/:id", userController.deleteOneById);

    return router;
  }
}