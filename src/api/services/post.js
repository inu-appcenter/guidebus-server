import postModel from "../models/post";

import CODE from "../../modules/statusCode";
import MSG from "../../modules/message";
import Response from "../../modules/response";

/**
 * @description insert, update, delete by admin
 */

const postService = {
  view: async () => {
    const data = postModel();
    console.log(data);
    if (!data) return { code: CODE.NOT_FOUND, json: Response.fail(MSG.DATABASE_ERROR) };
    else return { code: CODE.OK, json: Response.success(MSG.VIEW, data) };
  },
  insert: async () => {},
  update: async () => {},
  delete: async () => {},
};

export default postService;
