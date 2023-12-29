import { NextFunction, Request, Response } from "express";
import { TrainingDayService } from "../services/trainingDay.services";
import { seedTrainingDays } from '../utils/seedTrainingDays';

export class TrainingDayController { 

  private trainingDayService: TrainingDayService = new TrainingDayService();

  getAll = async (req: Request, res: Response, next: NextFunction) => { 
    try {
      const trainingDay = await this.trainingDayService.getAll();
      res.status(200).json({
        status: "success",
        payload: trainingDay,
      });
    } catch (error) {
      next(error);
    }
  }

  getOneById = async (req: Request, res: Response, next: NextFunction) => { 
    try {
      const { id } = req.params;
      const trainingDay = await this.trainingDayService.getOneById(id);
      res.status(200).json({
        status: "success",
        payload: trainingDay,
      });
    } catch (error) {
      next(error);
    }
  }

  createOne = async (req: Request, res: Response, next: NextFunction) => { 
    try {
      const trainingDay = await this.trainingDayService.createOne(req.body);
      res.status(201).json({
        status: "success",
        payload: trainingDay,
      });
    } catch (error) {
      next(error);
    }
  }

  updateOneById = async (req: Request, res: Response, next: NextFunction) => { 
    try {
      const { id } = req.params;
      const trainingDay = await this.trainingDayService.updateOneById(id, req.body);
      res.status(200).json({
        status: "success",
        payload: trainingDay,
      });
    } catch (error) {
      next(error);
    }
  }

  deleteOneById = async (req: Request, res: Response, next: NextFunction) => { 
    try {
      const { id } = req.params;
      const trainingDay = await this.trainingDayService.deleteOneById(id);
      res.status(200).json({
        status: "success",
        payload: trainingDay,
      });
    } catch (error) {
      next(error);
    }
  }

  seedTrainingDays = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { month, year } = req.body;
      const trainingDays = seedTrainingDays(month, year);
      const trainingDaysHours = trainingDays.map((day) => { 
        
      })
      res.status(200).json({
        status: "success",
        payload: trainingDays,
      });
      
    } catch (error) {
      next(error);
    }
  }
}