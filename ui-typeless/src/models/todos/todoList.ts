export class TodoList {
  id: number;
  title: string;
  completed: boolean;
  userId: number;

  constructor(id: number, title: string, completed: boolean, userId: number) {
    this.id = id;
    this.title = title;
    this.completed = completed;
    this.userId = userId;
  }
}

export class TodoListUtil {
  static fromJson(json: any): TodoList {
    return new TodoList(
      json["id"],
      json["title"],
      json["completed"],
      json["userId"]
    );
  }
  static toJson(obj: TodoList): any {
    return {
      id: obj.id,
      title: obj.title,
      completed: obj.completed,
      userId: obj.userId,
    };
  }
}
