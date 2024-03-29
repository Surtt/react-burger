import { AnyAction, Dispatch, Middleware, MiddlewareAPI } from "redux";
import { RootState } from "../../types";
import { getCookie } from "../../utils/getCookie";

export interface IWSAction {
  wsInit: string;
  wsSendMessage: string;
  onOpen: string;
  onClose: string;
  onError: string;
  onMessage: string;
}

export const socketMiddleware = (
  wsUrl: string,
  wsActions: IWSAction,
  auth: boolean = false
): Middleware => {
  return ((store: MiddlewareAPI<Dispatch<AnyAction>, RootState>) => {
    let socket: WebSocket | null = null;
    return (next) => (action: AnyAction) => {
      const { dispatch } = store;
      const { type, payload } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        wsActions;

      const token = auth ? getCookie("token") : null;

      if (type === wsInit) {
        socket = token
          ? new WebSocket(`${wsUrl}?token=${token}`)
          : new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;
          dispatch({ type: onMessage, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = payload;
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  }) as Middleware;
};
