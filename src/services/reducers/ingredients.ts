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
  IIngredient,
  IIngredientWithUuid,
  IOrder,
  IOrderNumber,
  IOrderUser,
} from "../../types";
import { TIngredientsActions } from "../actions/ingredients";

export interface IIngredientsState {
  ingredientsData: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredients: IIngredientWithUuid[];
  buns: null | IIngredient;
  orderNumber: null | IOrderNumber;
  orderNumberRequest: boolean;
  orderNumberFailed: boolean;
  orderData: null | IOrderUser;
  orderRequest: boolean;
  orderFailed: boolean;
}

export const initialState: IIngredientsState = {
  ingredientsData: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: [],
  buns: null,
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
  orderData: null,
  orderRequest: false,
  orderFailed: false,
};

export const ingredients = (
  state = initialState,
  action: TIngredientsActions
): IIngredientsState => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return { ...state, ingredientsRequest: true, ingredientsFailed: false };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsData: action.payload,
        ingredientsRequest: false,
      };
    }
    case GET_INGREDIENTS_FAILED: {
      return { ...state, ingredientsFailed: true, ingredientsRequest: false };
    }
    case ADD_BUNS: {
      return { ...state, buns: action.payload };
    }
    case ADD_INGREDIENT: {
      return {
        ...state,
        ingredients: [...state.ingredients, action.payload],
      };
    }
    case DELETE_INGREDIENT: {
      return {
        ...state,
        ingredients: [
          ...state.ingredients.filter(({ uuid }) => uuid !== action.payload),
        ],
      };
    }
    case GET_ORDER_NUMBER: {
      return { ...state, orderNumberRequest: true, orderNumberFailed: false };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.payload,
        orderNumberRequest: false,
        buns: null,
        ingredients: [],
      };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return { ...state, orderNumberFailed: true, orderNumberRequest: false };
    }
    case UPDATE_ORDER_INGREDIENTS: {
      const ingredients = [...state.ingredients];
      const { toIndex, fromIndex } = action.payload;
      ingredients.splice(toIndex, 0, ingredients.splice(fromIndex, 1)[0]);
      return { ...state, ingredients: ingredients };
    }
    case GET_ORDER: {
      return { ...state, orderRequest: true, orderFailed: false };
    }
    case GET_ORDER_SUCCESS: {
      return {
        ...state,
        orderData: action.payload,
        orderRequest: false,
      };
    }
    case GET_ORDER_FAILED: {
      return { ...state, orderFailed: true, orderRequest: false };
    }
    default: {
      return state;
    }
  }
};
