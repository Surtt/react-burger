import { IOrder } from "../../types";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_MESSAGE,
} from "../constants/ws";
import { TWsActions } from "../actions/wsActions";

interface IWsReducer {
  wsConnected: boolean;
  orders: IOrder[];
  total: number | null;
  totalToday: number | null;
  error?: Event;
}

export const initialState: IWsReducer = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: undefined,
};

export const wsReducer = (
  state = initialState,
  action: TWsActions
): IWsReducer => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS:
      return { ...state, error: undefined, wsConnected: true };

    case WS_CONNECTION_ERROR:
      return { ...state, error: action.payload, wsConnected: false };

    case WS_CONNECTION_CLOSED:
      return { ...state, error: undefined, wsConnected: false };

    case WS_GET_MESSAGE:
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
