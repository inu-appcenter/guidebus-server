import mysql, { format } from "mysql2/promise";
import config from "../../config/index";

const pool = mysql.createPool({
  ...config.database,
  connectionLimit: 10,
  waitForConnections: true,
});

const executeQuery = (query, values) => {
  new Promise(async (resolve, reject) => {
    let conn = await pool.getConnection();

    try {
      const sql = format(query, values);
      const [row] = await conn.execute(sql);
      conn.release();
      resolve(row);
    } catch (error) {
      if (conn) conn.release();
      reject(error);
    }
  });
};

export default executeQuery;
