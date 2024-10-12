import pg from "pg";
import dotenv from "dotenv";
dotenv.config;

const pool = new pg.Pool({
  port: 5432,
  host: process.env.POSTGRES_HOST,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
});

export default pool;