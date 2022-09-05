import * as types from "../constants/ws-auth";
import { initialState, wsAuthReducer as reducer } from "./wsAuthReducer";

describe("ws-auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle WS_CONNECTION_SUCCESS_AUTH", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_SUCCESS_AUTH,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: true,
    });
  });

  it("should handle WS_CONNECTION_ERROR_AUTH", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_ERROR_AUTH,
        payload: undefined,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    });
  });

  it("should handle WS_CONNECTION_CLOSED_AUTH", () => {
    expect(
      reducer(initialState, {
        type: types.WS_CONNECTION_CLOSED_AUTH,
      })
    ).toStrictEqual({
      ...initialState,
      error: undefined,
      wsConnected: false,
    });
  });

  it("should handle WS_GET_MESSAGE_AUTH", () => {
    expect(
      reducer(initialState, {
        type: types.WS_GET_MESSAGE_AUTH,
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
