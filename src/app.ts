import express from "express";

import cors from "cors";
import cookieParser from "cookie-parser";
import { Routes } from "./router/index.routes";
import { envsConfig } from "./config/envs.config";



export class App {

  private app: express.Application = express();
  
  constructor(private PORT: number) {
    this.PORT = PORT;
    this.middlewares();
    this.routes();
    this.start();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
    this.app.use(cookieParser());
  }

  private routes(): void { 
    this.app.use("/api", Routes.routes());
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on PORT ${this.PORT}`);
    });
  }


}


new App(+envsConfig.PORT);