import { store } from "../services/store";
import { TAuthActions } from "../services/actions/auth";
import { Action, ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { TIngredientsActions } from "../services/actions/ingredients";

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TAuthActions | TIngredientsActions;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  TApplicationActions
>;
export type AppDispatch<TReturnType = void> = (
  action: TApplicationActions | AppThunk
) => TReturnType;

export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  uuid: string;
  __v: number;
  _id: string;
}

export interface ILocationState {
  from: {
    pathname: string;
  };
}

export interface ILocationDetails {
  details?: any;
}

export interface IUserData {
  name?: string;
  email?: string;
  password?: string;
}

export interface IOrderNumber {
  name: string;
  order: { number: number };
  success: boolean;
}

export interface IOrderById {
  ingredients: string[];
}

export interface IOrderIngredient {
  toIndex: number;
  fromIndex: number;
}
