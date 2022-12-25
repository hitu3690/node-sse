export interface TodoRes {
  body: string;
  id: number;
  title: string;
  userId: number;
}

export default TodoRes;

export class TodoResUtil {
  static fromJson(json: any): TodoRes {
    return {
      id: json["id"],
      body: json["body"],
      title: json["title"],
      userId: json["userId"],
    };
  }
  static toJson(obj: TodoRes): any {
    return {
      id: obj.id,
      title: obj.title,
      body: obj.body,
      userId: obj.userId,
    };
  }
}
