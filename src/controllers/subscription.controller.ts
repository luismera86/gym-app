import { NextFunction, Request, Response } from "express";
import { SubscriptionService } from "../services/subscription.service";

export class SubscriptionController {

  private subscriptionServices = new SubscriptionService();

  getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscriptions = await this.subscriptionServices.getAll();
      res.status(200).json({
        status: "success",
        payload: subscriptions
      });
    } catch (error) {
      next(error);
    }
  }

  getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscription = await this.subscriptionServices.getById(req.params.id);
      res.status(200).json({
        status: "success",
        payload: subscription
      });
    } catch (error) {
      next(error);
    }
  }

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscription = await this.subscriptionServices.create(req.body);
      res.status(201).json({
        status: "success",
        payload: subscription
      });
    } catch (error) {
      next(error);
    }
  }

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscription = await this.subscriptionServices.update(req.params.id, req.body);
      res.status(200).json({
        status: "success",
        payload: subscription
      });
    } catch (error) {
      next(error);
    }
  }

  delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const subscription = await this.subscriptionServices.delete(req.params.id);
      res.status(200).json({
        status: "success",
        payload: subscription
      });
    } catch (error) {
      next(error);
    }
  }
}