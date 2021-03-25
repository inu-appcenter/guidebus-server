import Query from "../../config/query";
import ExecuteQuery from "./pool";

const AdminModel = {
  login: async (uId) => {
    const data = await ExecuteQuery(Query.SELECT_uId, uId);
    return data;
  },
};

export default AdminModel;
