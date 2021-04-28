/**
 * admin
 */
const SELECT_uId = "SELECT * FROM admin WHERE uId=?;";
const INSERT_uId_password = "INSERT INTO admin(uId, password) VALUES (?,?);";

/**
 * post
 */
const SELECT_all =
  "SELECT * FROM child_category INNER JOIN post ON child_category.childTitle=post.postTitle";

export default {
  SELECT_uId,
  INSERT_uId_password,
  SELECT_all,
};
