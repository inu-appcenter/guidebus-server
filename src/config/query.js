/**
 * admin
 */
const SELECT_uId = "SELECT * FROM admin WHERE uId=?;";
const INSERT_uId_password = "INSERT INTO admin(uId, password) VALUES (?,?);";

export default {
  SELECT_uId,
  INSERT_uId_password,
};
