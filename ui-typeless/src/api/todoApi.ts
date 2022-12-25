import { ApiResult } from "../logics/apiResultHandler";
import { TodoRes, TodoResUtil } from "../models/todos/todoRes";
import { PApi } from "./pApi";

class TodoApi extends PApi {
  async todoList(): Promise<ApiResult<TodoRes>> {
    const pathParams = {};
    const queryParams = {};
    const url = this._buildUrl("todoList", pathParams, queryParams);

    return this._get(url).then((res) => {
      if (res.data != null) {
        return { status: res.status, data: TodoResUtil.fromJson(res.data) };
      }
      return { status: res.status };
    });
  }
}

export default new TodoApi();
