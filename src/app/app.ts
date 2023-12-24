import express from "express";



export class App {

  private app: express.Application = express();
  
  constructor(private PORT: number) {
    this.PORT = PORT;
    this.middlewares();
    this.start();
  }

  private middlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  public start(): void {
    this.app.listen(this.PORT, () => {
      console.log(`Server running on PORT ${this.PORT}`);
    });
  }


}
