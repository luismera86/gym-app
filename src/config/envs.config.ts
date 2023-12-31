import { config } from "dotenv";

config({
  path: ".env"
});


const dbConfig = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
};

const envsConfig = {
  PORT: process.env.PORT || 3000,
  DB: dbConfig,
};

export { envsConfig };