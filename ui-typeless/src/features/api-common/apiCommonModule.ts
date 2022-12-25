import { ActionCreators, createModule } from "typeless";
import { from, map } from "typeless/rx";
import axios from "axios";
import { ApiCommonSymbol } from "./apiCommonSymbol";
import Id from "../../api/id";
// import { ApiResultType } from "../../logics/apiResultHandler";
import { type } from "os";

// type ApiStartAction = (
//   type: ApiResultType,
//   id: Id<ApiRequest>
// ) => {
//   payload: {
//     type: ApiResultType;
//     id: Id<ApiRequest>;
//   };
// };
// type ApiCommonAction = (id: Id<ApiRequest>) => {
//   payload: {
//     id: Id<ApiRequest>;
//   };
// };
// export type ApiCommonActionsState = ActionCreators<{
//   requestStart: ApiStartAction;
//   checkResult: ApiCommonAction;
//   requestEnd: ApiCommonAction;
//   checkAndShowTimeout: ApiCommonAction;
//   errorRequest: ApiCommonAction;
//   clearRequestState: ApiCommonAction;
// }>;
// export interface ApiRequest {
//   readonly type: ApiResultType;
//   showLoading: boolean;
//   showError: boolean;
// }
// export interface ApiCommonState {
//   requestingApis: Map<Id<ApiRequest>, ApiRequest>;
//   actions?: ApiCommonActionsState;
// }

// const initialState = {
//   requestingApis: new Map(),
// };
// const createApiCommonModule = () => {
//   const [useApiCommonModule, ApiCommonActions, getApiCommonState] =
//     createModule(ApiCommonSymbol)
//       .withActions({
//         fetchTodo: () => ({}),
//       })
//       .withState<ApiCommonState>();

//   useApiCommonModule.reducer(initialState);

//   return { useApiCommonModule, ApiCommonActions, getApiCommonState };
// };

// export const { useApiCommonModule, ApiCommonActions, getApiCommonState } =
//   createApiCommonModule();
