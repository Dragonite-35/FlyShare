import 'dotenv/config';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.PG_URI
});

export default {
  query: (text: string, params: Array<any>) => {
    return pool.query(text, params);
  }
};