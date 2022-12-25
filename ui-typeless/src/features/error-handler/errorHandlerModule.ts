import { createModule } from "typeless";
import * as Rx from "typeless/rx";
import { ErrorHandlerSymbol } from "./errorHandlerSymbol";

export enum FrontEndErrorCode {
  InternalRedirect,
  ExternalRedirect,
  PopupAlert,
}

export default FrontEndErrorCode;

interface BaseHandler {
  errorCode: FrontEndErrorCode;
}

interface RedirectErrorHandler extends BaseHandler {
  url?: string;
}

export interface ErrorHandlerState {
  internalRedirect: RedirectErrorHandler;
  externalRedirect: RedirectErrorHandler;
}

export const getInitialCustomerErrorHandlerState = (): ErrorHandlerState => ({
  internalRedirect: {
    errorCode: FrontEndErrorCode.InternalRedirect,
  },
  externalRedirect: {
    errorCode: FrontEndErrorCode.ExternalRedirect,
  },
});

const createErrorHandlerModule = () => {
  const [useErrorHandlerModule, ErrorHandlerActions, getErrorHandlerState] =
    createModule(ErrorHandlerSymbol)
      .withActions({
        logErrorHandler: (error: Error) => ({
          payload: { error },
        }),
        neverErrorHandler: (error: Error) => ({
          payload: { error },
        }),
        internalRedirectHandler: (
          error: Error,
          url: string,
          alertMeg = ""
        ) => ({
          payload: { error, url, alertMeg },
        }),
        externalRedirectHandler: (
          error: Error,
          url: string,
          alertMeg = ""
        ) => ({
          payload: { error, url, alertMeg },
        }),
      })
      .withState<ErrorHandlerState>();

  useErrorHandlerModule
    .reducer(getInitialCustomerErrorHandlerState())
    .on(ErrorHandlerActions.internalRedirectHandler, (state, { url }) => {
      state.internalRedirect.url = url;
    })
    .on(ErrorHandlerActions.externalRedirectHandler, (state, { url }) => {
      state.externalRedirect.url = url;
    });

  useErrorHandlerModule
    .epic()
    .on(ErrorHandlerActions.logErrorHandler, ({ error }) => {
      if (error != null) {
        // eslint-disable-next-line no-console
        console.log("+++++ catch ErrorHandler +++++");
        // eslint-disable-next-line no-console
        console.log(error);
      }
      return Rx.of();
    })
    .on(ErrorHandlerActions.internalRedirectHandler, ({ error, alertMeg }) => {
      // eslint-disable-next-line no-console
      console.log("+++++ catch ErrorHandler +++++");
      // eslint-disable-next-line no-console
      console.log(error);
      if (alertMeg !== "") {
        alert(alertMeg);
      }
      // ERRORのenum発行処理
      return Rx.empty();
    })
    .on(ErrorHandlerActions.externalRedirectHandler, ({ alertMeg }) => {
      if (alertMeg !== "") {
        alert(alertMeg);
      }
      // ERRORのenum発行処理
      return Rx.empty();
    });

  return { useErrorHandlerModule, ErrorHandlerActions, getErrorHandlerState };
};

export const {
  useErrorHandlerModule,
  ErrorHandlerActions,
  getErrorHandlerState,
} = createErrorHandlerModule();
