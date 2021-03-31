import DB from "mysql2/promise";

import config from "../config";

const Database = async () => {
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
};

export default Database;
