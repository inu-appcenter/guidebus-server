import Query from "../../modules/query";
import ExecuteQuery from "../../modules/pool";

const AdminModel = {
  findById: async (uId) => {
    return await ExecuteQuery(Query.SELECT_uId, uId);
  },

  insertAll: async (uId, password) => {
    await ExecuteQuery(Query.INSERT_uId_password, [uId, password]);
  },
};

export default AdminModel;
