import Query from "../../modules/query";
import ExecuteQuery from "../../modules/pool";

const postModel = {
  insertAll: async () => {
    return await ExecuteQuery(Query.SELECT_all);
  },
};

export default postModel;
