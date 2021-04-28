import postService from "../services/post";

import CODE from "../../modules/statusCode";
import Response from "../../modules/response";

/**
 * @description insert, update, delete by admin
 */

export default {
  view: async (req, res) => {
    const {} = req.body;
    try {
      const { code, json } = postService();
      return res.status(code).json(json);
    } catch (error) {
      return res.status(CODE.SERVER_ERROR).json(Response.fail(error.message));
    }
  },
  insert: async (req, res) => {},
  update: async (req, res) => {},
  delete: async (req, res) => {},
};
