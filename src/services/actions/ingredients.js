import { getData, placeOrder } from "../../utils/api/api";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const SHOW_INGREDIENT_DETAILS = "SHOW_INGREDIENT_DETAILS";
export const HIDE_INGREDIENT_DETAILS = "HIDE_INGREDIENT_DETAILS";
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const GET_ORDER_NUMBER = "GET_ORDER_NUMBER";
export const GET_ORDER_NUMBER_SUCCESS = "GET_ORDER_NUMBER_SUCCESS";
export const GET_ORDER_NUMBER_FAILED = "GET_ORDER_NUMBER_FAILED";

export const getIngredients = () => (dispatch) => {
  dispatch({ type: GET_INGREDIENTS });
  getData()
    .then((res) => {
      if (res && res.success) {
        dispatch({ type: GET_INGREDIENTS_SUCCESS, ingredientsData: res.data });
      } else {
        dispatch({ type: GET_INGREDIENTS_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_INGREDIENTS_FAILED });
    });
};

export const getOrderNumber = (data) => (dispatch) => {
  dispatch({ type: GET_ORDER_NUMBER });
  placeOrder(data)
    .then((req) => {
      if (req && req.success) {
        dispatch({ type: GET_ORDER_NUMBER_SUCCESS, orderNumber: req.order });
      } else {
        dispatch({ type: GET_ORDER_NUMBER_FAILED });
      }
    })
    .catch((error) => {
      dispatch({ type: GET_ORDER_NUMBER_FAILED });
    });
};
