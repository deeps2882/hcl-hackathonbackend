/** @format */

import { DataSource } from "typeorm";
import { entities } from "../entities";

//postgres:[YOUR-PASSWORD]@db.pomgepcfwyshtuexiebz.supabase.co:5432/postgres

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "db.pomgepcfwyshtuexiebz.supabase.co",
  port: 5432,
  username: "postgres",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: entities,
  // migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
