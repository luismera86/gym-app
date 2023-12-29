import { Router } from "express";
import { SubscriptionController } from "../controllers/subscription.controller";

export class SubscriptionRoutes {

  public static routes() {
    const subscriptionController = new SubscriptionController();
    const router = Router();

    router.get("/", subscriptionController.getAll);
    router.get("/:id", subscriptionController.getById);
    router.post("/", subscriptionController.create);
    router.put("/:id", subscriptionController.update);
    router.delete("/:id", subscriptionController.delete);

    return router;
  }
}