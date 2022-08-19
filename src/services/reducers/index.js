import { combineReducers } from "redux";
import { ingredients } from "./ingredients";
import { auth } from "./auth";
import { wsReducer } from "./wsReducer";

export const rootReducer = combineReducers({ ingredients, auth, wsReducer });
