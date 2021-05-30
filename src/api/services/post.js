import postModel from "../models/post";

import CODE from "../../modules/statusCode";
import MSG from "../../modules/message";
import Response from "../../modules/response";

/**
 * @description insert, update, delete by admin
 */

const postService = {
  view: async () => {
    const data = await postModel.selectAll();
    if (!data)
      return {
        code: CODE.SERVER_ERROR,
        json: Response.fail(MSG.DATABASE_ERROR),
      };
    else return { code: CODE.OK, json: Response.success(MSG.VIEW, data) };
  },
};

export default postService;
