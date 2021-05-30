import mysql from "mysql2/promise";

import config from "../config";

const Database = async () => {
  const connDatabase = await mysql.createConnection(config.database);
  await connDatabase.execute(
    `CREATE DATABASE IF NOT EXISTS ${config.db_schema}`
  );
  await connDatabase.end();

  const connTable = await mysql.createConnection({
    ...config.database,
    database: config.db_schema,
  });
  const tables = [
    `
    create table if not exists admin(
    id int auto_increment primary key,
    uId varchar(255) not null,
    password varchar(255) not null,
    createAt timestamp default CURRENT_TIMESTAMP not null,
    updatedAt timestamp default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    constraint admin_uId_uindex
        unique (uId)
    )
    `,
  ];

  await Promise.all(tables.map((value) => connTable.execute(value)));
  await connTable.end();
};

export default Database;
