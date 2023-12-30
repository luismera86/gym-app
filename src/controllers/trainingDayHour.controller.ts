import { NextFunction, Request, Response } from "express";
import { TrainingDayHourServices } from "../services/trainingDayHour.services";
import { TrainingDayService } from "../services/trainingDay.services";

export class TrainingDayHourController {
  private trainingDayHourService: TrainingDayHourServices = new TrainingDayHourServices();
  private trainingDayService: TrainingDayService = new TrainingDayService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const trainingDayHour = await this.trainingDayHourService.getAll();
      res.status(200).json({
        status: "success",
        payload: trainingDayHour,
      });
    } catch (error) {
      next(error);
    }
  };

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const trainingDayHour = await this.trainingDayHourService.getOneById(id);
      res.status(200).json({
        status: "success",
        payload: trainingDayHour,
      });
    } catch (error) {
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const trainingDayHour = await this.trainingDayHourService.createOne(req.body);
      res.status(201).json({
        status: "success",
        payload: trainingDayHour,
      });
    } catch (error) {
      next(error);
    }
  };

  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const trainingDayHour = await this.trainingDayHourService.updateOneById(id, req.body);
      res.status(200).json({
        status: "success",
        payload: trainingDayHour,
      });
    } catch (error) {
      next(error);
    }
  };

  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const trainingDayHour = await this.trainingDayHourService.deleteOneById(id);
      res.status(200).json({
        status: "success",
        payload: trainingDayHour,
      });
    } catch (error) {
      next(error);
    }
  };
}
