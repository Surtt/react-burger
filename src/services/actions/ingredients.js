import { getData, placeOrder } from "../../utils/api/api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const SHOW_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const HIDE_INGREDIENT_DETAILS = "HIDE_INGREDIENT_DETAILS";
export const ADD_BUNS = "ADD_BUNS";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const GET_ORDER_NUMBER = "GET_ORDER_NUMBER";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED = "GET_ORDER_NUMBER_FAILED";
export const UPDATE_ORDER_INGREDIENTS = "UPDATE_ORDER_INGREDIENTS";

export const getIngredientsReq = () => {
  return {
    type: GET_INGREDIENTS,
  };
};

export const getIngredientsSuccess = (payload) => {
  return {
    type: GET_INGREDIENTS_SUCCESS,
    ingredientsData: payload,
  };
};

export const getIngredientsFailed = () => {
  return {
    type: GET_INGREDIENTS_FAILED,
  };
};

export const getOrderNumberReq = () => {
  return {
    type: GET_ORDER_NUMBER,
  };
};

export const getOrderNumberSuccess = (payload) => {
  return {
    type: GET_ORDER_NUMBER_SUCCESS,
    orderNumber: payload,
  };
};

export const getOrderNumberFailed = () => {
  return {
    type: GET_ORDER_NUMBER_FAILED,
  };
};

export const showIngredientDetails = (payload) => {
  return {
    type: SHOW_INGREDIENT_DETAILS,
    payload,
  };
};

export const hideIngredientDetails = () => {
  return {
    type: HIDE_INGREDIENT_DETAILS,
  };
};

export const addBuns = (payload) => {
  return {
    type: ADD_BUNS,
    payload,
  };
};

export const addIngredient = (payload) => {
  return {
    type: ADD_INGREDIENT,
    payload,
  };
};

export const deleteIngredient = (payload) => {
  return {
    type: DELETE_INGREDIENT,
    payload,
  };
};

export const updateOrderIngredients = (payload) => {
  return {
    type: UPDATE_ORDER_INGREDIENTS,
    payload,
  };
};

export const getIngredients = () => (dispatch) => {
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

export const getOrderNumber = (data) => (dispatch) => {
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
