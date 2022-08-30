import * as types from "../constants/ws";
import { wsReducer as reducer } from "./wsReducer";

const initialState = {
  wsConnected: false,
  orders: [],
  total: null,
  totalToday: null,
  error: undefined,
};

describe("ws reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_SUCCESS,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    });
  });

  it("should handle WS_CONNECTION_ERROR", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_ERROR,
        payload: undefined,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    });
  });

  it("should handle WS_CONNECTION_CLOSED", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    });
  });

  it("should handle WS_GET_MESSAGE", () => {
    expect(
      reducer(initialState, {
        type: types.WS_GET_MESSAGE,
        payload: {
          orders: [
            {
              _id: "630de91d42d34a001c284c87",
              ingredients: [
                "60d3b41abdacab0026a733c7",
                "60d3b41abdacab0026a733cd",
                "60d3b41abdacab0026a733cc",
              ],
              status: "done",
              name: "Space флюоресцентный spicy бургер",
              createdAt: "2022-08-30T10:40:29.597Z",
              updatedAt: "2022-08-30T10:40:30.336Z",
              number: 24306,
            },
          ],
          total: 24220,
          totalToday: 42,
        },
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      orders: [
        {
          _id: "630de91d42d34a001c284c87",
          ingredients: [
            "60d3b41abdacab0026a733c7",
            "60d3b41abdacab0026a733cd",
            "60d3b41abdacab0026a733cc",
          ],
          status: "done",
          name: "Space флюоресцентный spicy бургер",
          createdAt: "2022-08-30T10:40:29.597Z",
          updatedAt: "2022-08-30T10:40:30.336Z",
          number: 24306,
        },
      ],
      total: 24220,
      totalToday: 42,
    });
  });
});
