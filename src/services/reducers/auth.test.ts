import * as types from "../constants/auth";
import { auth as reducer, initialState } from "./auth";

describe("auth reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, {} as any)).toEqual(initialState);
  });

  it("should handle REGISTER_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.REGISTER_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: true,
      registerFailed: false,
    });
  });

  it("should handle REGISTER_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.REGISTER_SUCCESS,
        payload: { name: "Admin", email: "admin@yandex.ru" },
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: false,
      user: { name: "Admin", email: "admin@yandex.ru" },
    });
  });

  it("should handle REGISTER_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.REGISTER_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: false,
      registerFailed: true,
    });
  });

  it("should handle LOGIN_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.LOGIN_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      loginRequest: true,
      loginFailed: false,
    });
  });

  it("should handle LOGIN_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.LOGIN_SUCCESS,
        payload: { name: "Admin", email: "admin@yandex.ru" },
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: false,
      user: { name: "Admin", email: "admin@yandex.ru" },
    });
  });

  it("should handle LOGIN_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.LOGIN_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      loginRequest: false,
      loginFailed: true,
    });
  });

  it("should handle LOGOUT_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.LOGOUT_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      logoutRequest: true,
      logoutFailed: false,
    });
  });

  it("should handle LOGOUT_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.LOGOUT_SUCCESS,
        payload: { token: "" },
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: false,
      user: { name: "", email: "" },
    });
  });

  it("should handle LOGOUT_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.LOGOUT_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      logoutRequest: false,
      logoutFailed: true,
    });
  });

  it("should handle USER_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.USER_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      userRequest: true,
      userFailed: false,
    });
  });

  it("should handle USER_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.USER_SUCCESS,
        payload: { name: "Admin", email: "admin@yandex.ru" },
      })
    ).toStrictEqual({
      ...initialState,
      registerRequest: false,
      user: { name: "Admin", email: "admin@yandex.ru" },
    });
  });

  it("should handle USER_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.USER_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      userRequest: false,
      userFailed: true,
    });
  });

  it("should handle UPDATE_USER_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.UPDATE_USER_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      updateUserRequest: true,
      updateUserFailed: false,
    });
  });

  it("should handle UPDATE_USER_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.UPDATE_USER_SUCCESS,
        payload: { name: "Admin", email: "admin@yandex.ru" },
      })
    ).toStrictEqual({
      ...initialState,
      updateUserRequest: false,
      user: { name: "Admin", email: "admin@yandex.ru" },
    });
  });

  it("should handle UPDATE_USER_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.UPDATE_USER_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      updateUserRequest: false,
      updateUserFailed: true,
    });
  });

  it("should handle FORGOT_PASSWORD_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASSWORD_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      forgotPasswordRequest: true,
      forgotPasswordFailed: false,
      isUserSendPasswordChangeReq: false,
    });
  });

  it("should handle FORGOT_PASSWORD_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASSWORD_SUCCESS,
        payload: { name: "Admin", email: "admin@yandex.ru" },
      })
    ).toStrictEqual({
      ...initialState,
      forgotPasswordRequest: false,
      isUserSendPasswordChangeReq: true,
    });
  });

  it("should handle FORGOT_PASSWORD_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.FORGOT_PASSWORD_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      forgotPasswordRequest: false,
      forgotPasswordFailed: true,
      isUserSendPasswordChangeReq: false,
    });
  });

  it("should handle RESET_PASSWORD_REQUEST", () => {
    expect(
      reducer(initialState, {
        type: types.RESET_PASSWORD_REQUEST,
      })
    ).toStrictEqual({
      ...initialState,
      resetPasswordRequest: true,
      resetPasswordFailed: false,
      isUserChangedPassword: false,
    });
  });

  it("should handle RESET_PASSWORD_SUCCESS", () => {
    expect(
      reducer(initialState, {
        type: types.RESET_PASSWORD_SUCCESS,
      })
    ).toStrictEqual({
      ...initialState,
      resetPasswordRequest: false,
      isUserChangedPassword: true,
    });
  });

  it("should handle RESET_PASSWORD_FAILED", () => {
    expect(
      reducer(initialState, {
        type: types.RESET_PASSWORD_FAILED,
      })
    ).toStrictEqual({
      ...initialState,
      resetPasswordRequest: false,
      resetPasswordFailed: true,
      isUserChangedPassword: false,
    });
  });
});
