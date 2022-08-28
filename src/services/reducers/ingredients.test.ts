import * as types from "../constants/ingredients";
import { ingredients as reducer } from "./ingredients";
import data from "../../utils/data";
import {
  ADD_BUNS,
  ADD_INGREDIENT,
  GET_INGREDIENTS_FAILED,
  GET_ORDER_FAILED,
  GET_ORDER_NUMBER,
  GET_ORDER_NUMBER_FAILED,
  GET_ORDER_NUMBER_SUCCESS,
  GET_ORDER_SUCCESS,
  UPDATE_ORDER_INGREDIENTS,
} from "../constants/ingredients";

const initialState = {
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

describe("ingredients reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle GET_INGREDIENTS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_INGREDIENTS,
      })
    ).toStrictEqual({
      ...initialState,
      ingredientsRequest: true,
      ingredientsFailed: false,
    });
  });

  it("should handle GET_INGREDIENTS_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_INGREDIENTS_SUCCESS,
        payload: data,
      })
    ).toStrictEqual({
      ...initialState,
      ingredientsRequest: false,
      ingredientsData: data,
    });
  });

  it("should handle GET_INGREDIENTS_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.GET_INGREDIENTS_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      ingredientsFailed: true,
      ingredientsRequest: false,
    });
  });

  it("should handle ADD_BUNS", () => {
    expect(
      reducer(initialState, {
        type: types.ADD_BUNS,
        payload: {
          _id: "60666c42cc7b410027a1a9b1",
          name: "Краторная булка N-200i",
          type: "bun",
          proteins: 80,
          fat: 24,
          carbohydrates: 53,
          calories: 420,
          price: 1255,
          image: "https://code.s3.yandex.net/react/code/bun-02.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
          __v: 0,
        },
      })
    ).toStrictEqual({
      ...initialState,
      buns: {
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
      },
    });
  });

  it("should handle ADD_INGREDIENT", () => {
    expect(
      reducer(initialState, {
        type: types.ADD_INGREDIENT,
        payload: {
          _id: "60d3b41abdacab0026a733cd",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: "https://code.s3.yandex.net/react/code/sauce-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656e8",
        },
      })
    ).toStrictEqual({
      ...initialState,
      ingredients: [
        {
          _id: "60d3b41abdacab0026a733cd",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: "https://code.s3.yandex.net/react/code/sauce-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656e8",
        },
      ],
    });
  });

  it("should handle DELETE_INGREDIENT", () => {
    expect(
      reducer(initialState, {
        type: types.DELETE_INGREDIENT,
        payload: "8a3b8455-92b2-41bb-a942-898ab8f656e8",
      })
    ).toStrictEqual({
      ...initialState,
      ingredients: [],
    });
  });

  it("should handle GET_ORDER_NUMBER", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_NUMBER,
      })
    ).toStrictEqual({
      ...initialState,
      orderNumberRequest: true,
      orderNumberFailed: false,
    });
  });

  it("should handle GET_ORDER_NUMBER_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_NUMBER_SUCCESS,
        payload: {
          ingredients: [
            {
              _id: "60d3b41abdacab0026a733c7",
              name: "Флюоресцентная булка R2-D3",
              type: "bun",
              proteins: 44,
              fat: 26,
              carbohydrates: 85,
              calories: 643,
              price: 988,
              image: "https://code.s3.yandex.net/react/code/bun-01.png",
              image_mobile:
                "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
              image_large:
                "https://code.s3.yandex.net/react/code/bun-01-large.png",
              __v: 0,
            },
          ],
          _id: "630b91db42d34a001c284747",
          owner: {
            name: "Александр",
            email: "fallen2@yandex.ru",
            createdAt: "2022-06-16T12:08:25.292Z",
            updatedAt: "2022-08-05T13:36:15.318Z",
          },
          status: "done",
          name: "Экзо-плантаго флюоресцентный бургер",
          createdAt: "2022-08-28T16:03:39.315Z",
          updatedAt: "2022-08-28T16:03:39.579Z",
          number: 24192,
          price: 5388,
        },
      })
    ).toStrictEqual({
      ...initialState,
      orderNumber: {
        ingredients: [
          {
            _id: "60d3b41abdacab0026a733c7",
            name: "Флюоресцентная булка R2-D3",
            type: "bun",
            proteins: 44,
            fat: 26,
            carbohydrates: 85,
            calories: 643,
            price: 988,
            image: "https://code.s3.yandex.net/react/code/bun-01.png",
            image_mobile:
              "https://code.s3.yandex.net/react/code/bun-01-mobile.png",
            image_large:
              "https://code.s3.yandex.net/react/code/bun-01-large.png",
            __v: 0,
          },
        ],
        _id: "630b91db42d34a001c284747",
        owner: {
          name: "Александр",
          email: "fallen2@yandex.ru",
          createdAt: "2022-06-16T12:08:25.292Z",
          updatedAt: "2022-08-05T13:36:15.318Z",
        },
        status: "done",
        name: "Экзо-плантаго флюоресцентный бургер",
        createdAt: "2022-08-28T16:03:39.315Z",
        updatedAt: "2022-08-28T16:03:39.579Z",
        number: 24192,
        price: 5388,
      },
    });
  });

  it("should handle GET_ORDER_NUMBER_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_NUMBER_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      orderNumberRequest: false,
      orderNumberFailed: true,
    });
  });

  it("should handle UPDATE_ORDER_INGREDIENTS", () => {
    const state = {
      ...initialState,
      ingredients: [
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656b9",
        },
        {
          _id: "60d3b41abdacab0026a733cd",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: "https://code.s3.yandex.net/react/code/sauce-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656e8",
        },
      ],
    };
    expect(
      reducer(state, {
        type: types.UPDATE_ORDER_INGREDIENTS,
        payload: {
          toIndex: 0,
          fromIndex: 1,
        },
      })
    ).toStrictEqual({
      ...initialState,
      ingredients: [
        {
          _id: "60d3b41abdacab0026a733cd",
          name: "Соус фирменный Space Sauce",
          type: "sauce",
          proteins: 50,
          fat: 22,
          carbohydrates: 11,
          calories: 14,
          price: 80,
          image: "https://code.s3.yandex.net/react/code/sauce-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/sauce-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/sauce-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656e8",
        },
        {
          _id: "60666c42cc7b410027a1a9b5",
          name: "Говяжий метеорит (отбивная)",
          type: "main",
          proteins: 800,
          fat: 800,
          carbohydrates: 300,
          calories: 2674,
          price: 3000,
          image: "https://code.s3.yandex.net/react/code/meat-04.png",
          image_mobile:
            "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
          image_large:
            "https://code.s3.yandex.net/react/code/meat-04-large.png",
          __v: 0,
          uuid: "8a3b8455-92b2-41bb-a942-898ab8f656b9",
        },
      ],
    });
  });

  it("should handle GET_ORDER", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER,
      })
    ).toStrictEqual({
      ...initialState,
      orderRequest: true,
      orderFailed: false,
    });
  });

  it("should handle GET_ORDER_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_SUCCESS,
        payload: {
          _id: "630b927742d34a001c284748",
          ingredients: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cf"],
          owner: "62d6a1b842d34a001c279e26",
          status: "done",
          name: "Бессмертный space флюоресцентный фалленианский астероидный био-марсианский альфа-сахаридный минеральный антарианский люминесцентный метеоритный экзо-плантаго бургер",
          createdAt: "2022-08-28T16:06:15.799Z",
          updatedAt: "2022-08-28T16:06:16.140Z",
          number: 24193,
          __v: 0,
        },
      })
    ).toStrictEqual({
      ...initialState,
      orderData: {
        _id: "630b927742d34a001c284748",
        ingredients: ["60d3b41abdacab0026a733cd", "60d3b41abdacab0026a733cf"],
        owner: "62d6a1b842d34a001c279e26",
        status: "done",
        name: "Бессмертный space флюоресцентный фалленианский астероидный био-марсианский альфа-сахаридный минеральный антарианский люминесцентный метеоритный экзо-плантаго бургер",
        createdAt: "2022-08-28T16:06:15.799Z",
        updatedAt: "2022-08-28T16:06:16.140Z",
        number: 24193,
        __v: 0,
      },
      orderRequest: false,
    });
  });

  it("should handle GET_ORDER_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.GET_ORDER_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      orderRequest: false,
      orderFailed: true,
    });
  });
});
