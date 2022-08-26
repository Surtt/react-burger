import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { WS_AUTH_URL, WS_URL } from "../utils/api/api";
import { wsActions } from "./actions/wsActions";
import { wsAuthActions } from "./actions/wsAuthActions";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    socketMiddleware(WS_URL, wsActions),
    socketMiddleware(WS_AUTH_URL, wsAuthActions, true)
  )
);

export const store = createStore(rootReducer, enhancer);
