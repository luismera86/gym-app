import { App } from "./app/app";
import { envsConfig } from "./config/envs.config";

new App(+envsConfig.PORT);