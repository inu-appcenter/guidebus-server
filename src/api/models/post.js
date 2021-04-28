import Query from "../../modules/query";
import ExecuteQuery from "../../modules/pool";

const postModel = {
  selectAll: async () => {
    return await ExecuteQuery(Query.SELECT_all);
  },
};

export default postModel;
