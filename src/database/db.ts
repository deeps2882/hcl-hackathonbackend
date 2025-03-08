/** @format */

import { DataSource } from "typeorm";
import { entities } from "../entities";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "healthcare",
  synchronize: true,
  logging: true,
  entities: entities,
  // migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
