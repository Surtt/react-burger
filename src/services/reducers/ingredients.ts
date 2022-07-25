import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
  ADD_BUNS,
  UPDATE_ORDER_INGREDIENTS,
} from "../constants/ingredients";
import { IIngredient, IOrderNumber } from "../../types";
import { TIngredientsActions } from "../actions/ingredients";

export interface IIngredientsState {
  ingredientsData: IIngredient[];
  ingredientsRequest: boolean;
  ingredientsFailed: boolean;
  ingredients: IIngredient[];
  buns: null | IIngredient;
  orderNumber: null | IOrderNumber;
  orderNumberRequest: boolean;
  orderNumberFailed: boolean;
}

const initialState = {
  ingredientsData: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredients: [],
  buns: null,
  orderNumber: null,
  orderNumberRequest: false,
  orderNumberFailed: false,
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
    default: {
      return state;
    }
  }
};
