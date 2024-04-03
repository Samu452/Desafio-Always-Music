import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

const { DB_USER, DB_PASS, DB_HOST, DB_DATABASE } = process.env;

const config = {
  user: DB_USER,
  password: DB_PASS,
  host: DB_HOST,
  database: DB_DATABASE,
  allowExitOnIdle: true,
};
const pool = new Pool(config);

export default pool;
