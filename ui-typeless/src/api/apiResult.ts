export interface ApiResult<T> {
  status: number;
  data?: T;
  error?: any;
}

export class ApiResultFactory {
  static create<T>(status: number, data?: T, error?: any): ApiResult<T> {
    return {
      data,
      error,
      status,
    };
  }
}
