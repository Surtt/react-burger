import { IOrder } from "../../types";
import { TWsAuthActions } from "../actions/wsAuthActions";
import {
  WS_CONNECTION_CLOSED_AUTH,
  WS_CONNECTION_ERROR_AUTH,
  WS_CONNECTION_SUCCESS_AUTH,
  WS_GET_MESSAGE_AUTH,
} from "../constants/ws-auth";

interface IWsAuthReducer {
  wsConnected: boolean;
  orders: IOrder[];
  total: number | null;
  totalToday: number | null;
  error?: Event;
}

export const initialState: IWsAuthReducer = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: undefined,
};

export const wsAuthReducer = (
  state = initialState,
  action: TWsAuthActions
): IWsAuthReducer => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS_AUTH:
      return { ...state, error: undefined, wsConnected: true };

    case WS_CONNECTION_ERROR_AUTH:
      return { ...state, error: action.payload, wsConnected: false };

    case WS_CONNECTION_CLOSED_AUTH:
      return { ...state, error: undefined, wsConnected: false };

    case WS_GET_MESSAGE_AUTH:
      return {
        ...state,
        error: undefined,
        orders: action.payload.orders,
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };

    default:
      return state;
  }
};
