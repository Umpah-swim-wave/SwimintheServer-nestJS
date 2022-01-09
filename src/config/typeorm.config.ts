import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import "dotenv/config";

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  entities: [__dirname + "/../**/*.entity.{js,ts}"],
  synchronize: false,

  // type: "mysql",
  // host: "127.0.0.1",
  // port: 3306,
  // username: "root",
  // password: "pass",
  // database: "Umpha",
  // entities: [__dirname + "/../**/*.entity.{js,ts}"],
  // synchronize: false,
};
