import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_FAILED,
  GET_INGREDIENTS_SUCCESS,
  ADD_INGREDIENT,
  DELETE_INGREDIENT,
  GET_ORDER_NUMBER,
  SHOW_INGREDIENT_DETAILS,
  HIDE_INGREDIENT_DETAILS,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_NUMBER_FAILED,
  ADD_BUNS,
} from "../actions/ingredients";

const initialState = {
  ingredientsData: [],
  ingredientsRequest: false,
  ingredientsFailed: false,
  ingredientDetails: null,
  ingredients: [],
  buns: null,
  orderNumber: {},
  orderNumberRequest: false,
  orderNumberFailed: false,
};

export const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS: {
      return { ...state, ingredientsRequest: true, ingredientsFailed: false };
    }
    case GET_INGREDIENTS_SUCCESS: {
      return {
        ...state,
        ingredientsData: action.ingredientsData,
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
          ...state.ingredients.filter(({ _id }) => _id !== action.payload),
        ],
      };
    }
    case SHOW_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: action.payload,
      };
    }
    case HIDE_INGREDIENT_DETAILS: {
      return {
        ...state,
        ingredientDetails: null,
      };
    }
    case GET_ORDER_NUMBER: {
      return { ...state, orderNumberRequest: true, orderNumberFailed: false };
    }
    case GET_ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        orderNumber: action.orderNumber,
        orderNumberRequest: false,
      };
    }
    case GET_ORDER_NUMBER_FAILED: {
      return { ...state, orderNumberFailed: true, orderNumberRequest: false };
    }
    default: {
      return state;
    }
  }
};
