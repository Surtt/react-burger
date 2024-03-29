import {
  getData,
  getOrderRequestData,
  getOrderRequestDataUser,
  placeOrder,
} from "../../utils/api/api";
import {
  ADD_BUNS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  GET_ORDER,
  GET_ORDER_FAILED,
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_INGREDIENTS,
} from "../constants/ingredients";
import {
  AppDispatch,
  AppThunk,
  IIngredient,
  IIngredientWithUuid,
  IOrder,
  IOrderById,
  IOrderIngredient,
  IOrderNumber,
  IOrderUser,
} from "../../types";

export interface IGetIngredientsRequestAction {
  readonly type: typeof GET_INGREDIENTS;
}

export interface IGetIngredientsSuccessAction {
  readonly type: typeof GET_INGREDIENTS_SUCCESS;
  readonly payload: IIngredient[];
}

export interface IGetIngredientsFailedAction {
  readonly type: typeof GET_INGREDIENTS_FAILED;
}

export interface IGetOrderNumberAction {
  readonly type: typeof GET_ORDER_NUMBER;
}

export interface IGetOrderNumberSuccessAction {
  readonly type: typeof GET_ORDER_NUMBER_SUCCESS;
  readonly payload: IOrderNumber;
}

export interface IGetOrderNumberFailedAction {
  readonly type: typeof GET_ORDER_NUMBER_FAILED;
}

export interface IAddBunsAction {
  readonly type: typeof ADD_BUNS;
  readonly payload: IIngredient;
}

export interface IAddIngredientAction {
  readonly type: typeof ADD_INGREDIENT;
  readonly payload: IIngredientWithUuid;
}

export interface IDeleteIngredientAction {
  readonly type: typeof DELETE_INGREDIENT;
  readonly payload: string;
}

export interface IUpdateOrderIngredientsAction {
  readonly type: typeof UPDATE_ORDER_INGREDIENTS;
  readonly payload: IOrderIngredient;
}

export interface IGetOrderAction {
  readonly type: typeof GET_ORDER;
}

export interface IGetOrderSuccessAction {
  readonly type: typeof GET_ORDER_SUCCESS;
  readonly payload: IOrderUser;
}

export interface IGetOrderFailedAction {
  readonly type: typeof GET_ORDER_FAILED;
}

export type TIngredientsActions =
  | IGetIngredientsRequestAction
  | IGetIngredientsSuccessAction
  | IGetIngredientsFailedAction
  | IGetOrderNumberAction
  | IGetOrderNumberSuccessAction
  | IGetOrderNumberFailedAction
  | IAddBunsAction
  | IAddIngredientAction
  | IDeleteIngredientAction
  | IUpdateOrderIngredientsAction
  | IGetOrderAction
  | IGetOrderSuccessAction
  | IGetOrderFailedAction;

export const getIngredientsReq = (): IGetIngredientsRequestAction => {
  return {
    type: GET_INGREDIENTS,
  };
};

export const getIngredientsSuccess = (
  payload: IIngredient[]
): IGetIngredientsSuccessAction => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    payload,
  };
};

export const getIngredientsFailed = (): IGetIngredientsFailedAction => {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
};

export const getOrderNumberReq = (): IGetOrderNumberAction => {
  return {
    type: GET_ORDER_NUMBER,
  };
};

export const getOrderNumberSuccess = (
  payload: IOrderNumber
): IGetOrderNumberSuccessAction => {
  return {
    type: GET_ORDER_NUMBER_SUCCESS,
    payload,
  };
};

export const getOrderNumberFailed = (): IGetOrderNumberFailedAction => {
  return {
    type: GET_ORDER_NUMBER_FAILED,
  };
};

export const addBuns = (payload: IIngredient): IAddBunsAction => {
  return {
    type: ADD_BUNS,
    payload,
  };
};

export const addIngredient = (
  payload: IIngredientWithUuid
): IAddIngredientAction => {
  return {
    type: ADD_INGREDIENT,
    payload,
  };
};

export const deleteIngredient = (payload: string): IDeleteIngredientAction => {
  return {
    type: DELETE_INGREDIENT,
    payload,
  };
};

export const updateOrderIngredients = (
  payload: IOrderIngredient
): IUpdateOrderIngredientsAction => {
  return {
    type: UPDATE_ORDER_INGREDIENTS,
    payload,
  };
};

export const getOrderRequest = (): IGetOrderAction => {
  return {
    type: GET_ORDER,
  };
};

export const getOrderSuccess = (
  payload: IOrderUser
): IGetOrderSuccessAction => {
  return {
    type: GET_ORDER_SUCCESS,
    payload,
  };
};

export const getOrderFailed = (): IGetOrderFailedAction => {
  return {
    type: GET_ORDER_FAILED,
  };
};

export const getOrderRequestUser = (): IGetOrderAction => {
  return {
    type: GET_ORDER,
  };
};

export const getOrderSuccessUser = (
  payload: IOrderUser
): IGetOrderSuccessAction => {
  return {
    type: GET_ORDER_SUCCESS,
    payload,
  };
};

export const getOrderFailedUser = (): IGetOrderFailedAction => {
  return {
    type: GET_ORDER_FAILED,
  };
};

export const getIngredients = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(getIngredientsReq());
  getData()
    .then((res) => {
      if (res && res.success) {
        dispatch(getIngredientsSuccess(res.data));
      } else {
        dispatch(getIngredientsFailed());
      }
    })
    .catch((error) => {
      dispatch(getIngredientsFailed());
    });
};

export const getOrderNumber =
  (data: IOrderById): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderNumberReq());
    placeOrder(data)
      .then((req) => {
        if (req && req.success) {
          dispatch(getOrderNumberSuccess(req.order));
        } else {
          dispatch(getOrderNumberFailed());
        }
      })
      .catch((error) => {
        dispatch(getOrderNumberFailed());
      });
  };

export const getOrderData =
  (id: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderRequest());
    getOrderRequestData(id)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccess(res.orders[0]));
        } else {
          dispatch(getOrderFailed());
        }
      })
      .catch((error) => {
        dispatch(getOrderFailed());
      });
  };

export const getOrderDataUser =
  (id: string): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(getOrderRequestUser());
    getOrderRequestDataUser(id)
      .then((res) => {
        if (res && res.success) {
          dispatch(getOrderSuccessUser(res.orders[0]));
        } else {
          dispatch(getOrderFailedUser());
        }
      })
      .catch((error) => {
        dispatch(getOrderFailedUser());
      });
  };
