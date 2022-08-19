import { PayloadAction } from "@reduxjs/toolkit";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE,
} from "../constants/ws";
import { IOrders } from "../../types";

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_MESSAGE,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_MESSAGE,
};

export interface IWsConnectionClosedAction {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

export interface IWsConnectionErrorAction {
  readonly type: typeof WS_CONNECTION_ERROR;
  payload: Event;
}

export interface IWsConnectionStartAction {
  readonly type: typeof WS_CONNECTION_START;
}

export interface IWsConnectionSuccessAction {
  readonly type: typeof WS_CONNECTION_SUCCESS;
  payload: PayloadAction;
}

export interface IWsGetMessageAction {
  readonly type: typeof WS_GET_MESSAGE;
  payload: IOrders;
}

export interface IWsSendMessageAction {
  readonly type: typeof WS_SEND_MESSAGE;
}

export type TWsActions =
  | IWsConnectionClosedAction
  | IWsConnectionErrorAction
  | IWsConnectionStartAction
  | IWsConnectionSuccessAction
  | IWsGetMessageAction
  | IWsSendMessageAction;

// export const wsConnectionClosed = (): IWsConnectionClosedAction => {
//   return {
//     type: WS_CONNECTION_CLOSED,
//   };
// };

// export const wsConnectionError = (): IWsConnectionErrorAction => {
//   return {
//     type: WS_CONNECTION_ERROR,
//   };
// };

export const wsConnectionStart = (): IWsConnectionStartAction => {
  return {
    type: WS_CONNECTION_START,
  };
};

// export const wsConnectionSuccess = (): IWsConnectionSuccessAction => {
//   return {
//     type: WS_CONNECTION_SUCCESS,
//   };
// };

export const wsGetMessage = (payload: IOrders): IWsGetMessageAction => {
  return {
    type: WS_GET_MESSAGE,
    payload,
  };
};

export const wsSendMessage = (): IWsSendMessageAction => {
  return {
    type: WS_SEND_MESSAGE,
  };
};
