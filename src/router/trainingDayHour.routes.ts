import { Router } from "express";
import { TrainingDayHourController } from "../controllers/trainingDayHour.controller";

export class TrainingDayHourRoutes { 

  public static routes() {
    const trainingDayHour = new TrainingDayHourController();
    const router = Router();

    router.get("/", trainingDayHour.getAll);
    router.get("/:id", trainingDayHour.getOneById);
    router.post("/", trainingDayHour.createOne);
    router.put("/:id", trainingDayHour.updateOneById);
    router.delete("/:id", trainingDayHour.deleteOneById);

    return router;
  }
}