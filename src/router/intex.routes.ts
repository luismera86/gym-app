import e, { NextFunction, Request, Response, Router } from "express";
import { RoleRoutes } from "./role.routes";
import { ErrorHandled } from "../utils/errorHandled";
import { UserRoutes } from "./user.routes";
import { SubscriptionRoutes } from "./subscription.routes";
import { TrainingDayRoutes } from "./trainingDay.routes";
import { TrainingDayHourRoutes } from "./trainingDayHour.routes";


export class Routes {

  public static routes() {
    const router = Router();
    router.use("/role", RoleRoutes.routes());
    router.use("/user", UserRoutes.routes());
    router.use("/subscription", SubscriptionRoutes.routes());
    router.use("/trainingDay", TrainingDayRoutes.routes());
    router.use("/trainingDayHour", TrainingDayHourRoutes.routes());

    router.use((err: any, req: Request, res: Response, next: NextFunction) => {
      if (err instanceof ErrorHandled) {
        res.status(err.status).send({ error: err.message });
      } else {
        res.status(500).send({ error: err.message });
      }
    });

    return router;
  }
}