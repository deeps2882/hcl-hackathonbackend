/** @format */

import { DataSource } from "typeorm";
import { entities } from "../entities";

//postgres:[YOUR-PASSWORD]@db.pomgepcfwyshtuexiebz.supabase.co:5432/postgres

//  postgresql://postgres.pomgepcfwyshtuexiebz:[YOUR-PASSWORD]@aws-0-ap-south-1.pooler.supabase.com:6543/postgres

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "aws-0-ap-south-1.pooler.supabase.com",
  port: 6543,
  username: "postgres.pomgepcfwyshtuexiebz",
  password: "postgres",
  database: "postgres",
  synchronize: true,
  logging: true,
  entities: entities,
  // migrations: ["src/migrations/**/*.ts"],
  subscribers: [],
});
