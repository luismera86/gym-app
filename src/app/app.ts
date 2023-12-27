import express from "express";
import { Routes } from "../router/intex.routes";



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
