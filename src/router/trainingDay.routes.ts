import { Router } from "express";
import { TrainingDayController } from "../controllers/trainingDay.controller";

export class TrainingDayRoutes {

  public static routes() {
    const trainingDay = new TrainingDayController();
    const router = Router();

    router.get("/", trainingDay.getAll);
    router.get("/:id", trainingDay.getOneById);
    router.post("/", trainingDay.createOne);
    router.post("/seed", trainingDay.seedTrainingDays);
    router.put("/:id", trainingDay.updateOneById);
    router.delete("/:id", trainingDay.deleteOneById);

    return router;
  }
}