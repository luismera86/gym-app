import { NextFunction, Request, Response } from "express";
import { TrainingDayHourServices } from "../services/trainingDayHour.services";

export class TrainingDayHourController {
  private trainingDayHourService: TrainingDayHourServices = new TrainingDayHourServices();

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
  }

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
  }

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
  }

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
  }

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
  }

  generateTrainingDayHours = async (req: Request, res: Response, next: NextFunction) => {
    const { idTrainingDay } = req.params;
    try { 
      const hours = ["08:00", "09:00", "10:00", "11:00", "12:00", "17:00", "18:00", "19:00", "20:00", "21:00"];

      const trainingDayHours = hours.map(async (hour) => { 
        const tdh = await this.trainingDayHourService.generateTrainingDayHours(idTrainingDay, hour);
        return tdh;
      });

      res.status(200).json({
        status: "success",
        payload: trainingDayHours,
      });

    } catch (error) {
      next(error);
    }
  }

}