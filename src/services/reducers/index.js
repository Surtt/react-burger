import { combineReducers } from "redux";
import { ingredients } from "./ingredients";
import { auth } from "./auth";
import { wsReducer } from "./wsReducer";
import { wsAuthReducer } from "./wsAuthReducer";

export const rootReducer = combineReducers({
  ingredients,
  auth,
  wsReducer,
  wsAuthReducer,
});
