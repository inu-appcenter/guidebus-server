import Query from "../../config/query";
import ExecuteQuery from "../../modules/pool";

const AdminModel = {
  findById: async (uId) => {
    const data = await ExecuteQuery(Query.SELECT_uId, uId);
    return data;
  },

  insertAll: async (uId, password) => {
    await ExecuteQuery(Query.INSERT_uId_password, [uId, password]);
  },
};

export default AdminModel;
