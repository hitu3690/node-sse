import * as Rx from "typeless/rx";
import { Observable, SchedulerLike } from "rxjs";

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
export const ApiResultType = {
  Query: 0,
  Mutation: 1,
  RealtimeMutation: 2,
} as const;
// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ApiResultType = typeof ApiResultType[keyof typeof ApiResultType];

const commonHandler = <T, R>(
  type: ApiResultType,
  input: PromiseLike<ApiResult<T>>,
  scheduler?: SchedulerLike
) => {};

export const apiResultHandler = <T>(
  input: PromiseLike<ApiResult<T>>,
  scheduler?: SchedulerLike
) => {
  return commonHandler(ApiResultType.Query, input, scheduler);
};
