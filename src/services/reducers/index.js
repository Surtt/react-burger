import { combineReducers } from "redux";
import { ingredients } from "./ingredients";
import { auth } from "./auth";

export const rootReducer = combineReducers({ ingredients, auth });
