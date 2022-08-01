import {
  forgotPasswordRequest,
  getUserData,
  logOutRequest,
  resetPasswordRequest,
  signInUserRequest,
  signUpUserRequest,
  updateUserData,
} from "../../utils/api/api";
import { setCookie } from "../../utils/setCookie";
import { deleteCookie } from "../../utils/deleteCookie";
import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
  UPDATE_USER_FAILED,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_FAILED,
  USER_REQUEST,
  USER_SUCCESS,
} from "../constants/auth";
import { AppDispatch, AppThunk, IUserData } from "../../types";

export interface IRegisterRequestAction {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IRegisterSuccessAction {
  readonly type: typeof REGISTER_SUCCESS;
  readonly payload: IUserData;
}

export interface IRegisterFailedAction {
  readonly type: typeof REGISTER_FAILED;
}

export interface ILoginRequestAction {
  readonly type: typeof LOGIN_REQUEST;
}

export interface ILoginSuccessAction {
  readonly type: typeof LOGIN_SUCCESS;
  readonly payload: IUserData;
}

export interface ILoginFailedAction {
  readonly type: typeof LOGIN_FAILED;
}

export interface ILogoutRequestAction {
  readonly type: typeof LOGOUT_REQUEST;
}

export interface ILogoutSuccessAction {
  readonly type: typeof LOGOUT_SUCCESS;
  readonly payload: { token: string };
}

export interface ILogoutFailedAction {
  readonly type: typeof LOGOUT_FAILED;
}

export interface IUserRequestAction {
  readonly type: typeof USER_REQUEST;
}

export interface IUserSuccessAction {
  readonly type: typeof USER_SUCCESS;
  readonly payload: IUserData;
}

export interface IUserFailedAction {
  readonly type: typeof USER_FAILED;
}

export interface IUpdateUserRequestAction {
  readonly type: typeof UPDATE_USER_REQUEST;
}

export interface IUpdateUserSuccessAction {
  readonly type: typeof UPDATE_USER_SUCCESS;
  readonly payload: IUserData;
}

export interface IUpdateUserFailedAction {
  readonly type: typeof UPDATE_USER_FAILED;
}

export interface IForgotPasswordRequestAction {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccessAction {
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
  readonly payload: IUserData;
}

export interface IForgotPasswordFailedAction {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IResetPasswordRequestAction {
  readonly type: typeof RESET_PASSWORD_REQUEST;
}

export interface IResetPasswordSuccessAction {
  readonly type: typeof RESET_PASSWORD_SUCCESS;
  readonly payload: IUserData;
}

export interface IResetPasswordFailedAction {
  readonly type: typeof RESET_PASSWORD_FAILED;
}

export type TAuthActions =
  | IRegisterRequestAction
  | IRegisterSuccessAction
  | IRegisterFailedAction
  | ILoginRequestAction
  | ILoginSuccessAction
  | ILoginFailedAction
  | ILogoutRequestAction
  | ILogoutSuccessAction
  | ILogoutFailedAction
  | IUserRequestAction
  | IUserSuccessAction
  | IUserFailedAction
  | IUpdateUserRequestAction
  | IUpdateUserSuccessAction
  | IUpdateUserFailedAction
  | IForgotPasswordRequestAction
  | IForgotPasswordSuccessAction
  | IForgotPasswordFailedAction
  | IResetPasswordRequestAction
  | IResetPasswordSuccessAction
  | IResetPasswordFailedAction;

export const registerRequest = (): IRegisterRequestAction => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (payload: IUserData): IRegisterSuccessAction => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFailed = (): IRegisterFailedAction => {
  return {
    type: REGISTER_FAILED,
  };
};

export const loginRequest = (): ILoginRequestAction => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (payload: IUserData): ILoginSuccessAction => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailed = (): ILoginFailedAction => {
  return {
    type: LOGIN_FAILED,
  };
};

export const logoutRequest = (): ILogoutRequestAction => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = (payload: {
  token: string;
}): ILogoutSuccessAction => {
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};

export const logoutFailed = (): ILogoutFailedAction => {
  return {
    type: LOGOUT_FAILED,
  };
};

export const userRequest = (): IUserRequestAction => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (payload: IUserData): IUserSuccessAction => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

export const userFailed = (): IUserFailedAction => {
  return {
    type: USER_FAILED,
  };
};

export const updateUserRequest = (): IUpdateUserRequestAction => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (
  payload: IUserData
): IUpdateUserSuccessAction => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload,
  };
};

export const updateUserFailed = (): IUpdateUserFailedAction => {
  return {
    type: UPDATE_USER_FAILED,
  };
};

export const forgotPasswordReq = (): IForgotPasswordRequestAction => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = (
  payload: IUserData
): IForgotPasswordSuccessAction => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};

export const forgotPasswordFailed = (): IForgotPasswordFailedAction => {
  return {
    type: FORGOT_PASSWORD_FAILED,
  };
};

export const resetPasswordReq = (): IResetPasswordRequestAction => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = (
  payload: IUserData
): IResetPasswordSuccessAction => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload,
  };
};

export const resetPasswordFailed = (): IResetPasswordFailedAction => {
  return {
    type: RESET_PASSWORD_FAILED,
  };
};

export const registerUser =
  (data: IUserData): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(registerRequest());
    signUpUserRequest(data)
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", authToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch(registerSuccess(res.user));
        } else {
          dispatch(registerFailed());
        }
      })
      .catch((error) => {
        dispatch(registerFailed());
      });
  };

export const loginUser =
  (data: IUserData): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(loginRequest());
    signInUserRequest(data)
      .then((res) => {
        if (res && res.success) {
          const authToken = res.accessToken.split("Bearer ")[1];
          setCookie("token", authToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          dispatch(loginSuccess(res.user));
        } else {
          dispatch(loginFailed());
        }
      })
      .catch((error) => {
        dispatch(loginFailed());
      });
  };

export const logoutUser =
  (data: { token: string }): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(logoutRequest());
    logOutRequest(data)
      .then((res) => {
        if (res && res.success) {
          deleteCookie("token");
          dispatch(logoutSuccess(res.user));
        } else {
          dispatch(logoutFailed());
        }
      })
      .catch((error) => {
        dispatch(logoutFailed());
      });
  };

export const getUser = (): AppThunk => (dispatch: AppDispatch) => {
  dispatch(userRequest());
  getUserData()
    .then((res) => {
      if (res && res.success) {
        dispatch(userSuccess(res.user));
      } else {
        dispatch(userFailed());
      }
    })
    .catch((error) => {
      dispatch(userFailed());
    });
};

export const updateUser =
  (data: IUserData): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(updateUserRequest());
    updateUserData(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(updateUserSuccess(res.user));
        } else {
          dispatch(updateUserFailed());
        }
      })
      .catch((error) => {
        dispatch(updateUserFailed());
      });
  };

export const forgotPassword =
  (data: IUserData): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(forgotPasswordReq());
    forgotPasswordRequest(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(forgotPasswordSuccess(res.user));
        } else {
          dispatch(forgotPasswordFailed());
        }
      })
      .catch((error) => {
        dispatch(forgotPasswordFailed());
      });
  };

export const resetPassword =
  (data: IUserData): AppThunk =>
  (dispatch: AppDispatch) => {
    dispatch(resetPasswordReq());
    resetPasswordRequest(data)
      .then((res) => {
        if (res && res.success) {
          dispatch(resetPasswordSuccess(res.user));
        } else {
          dispatch(resetPasswordFailed());
        }
      })
      .catch((error) => {
        dispatch(resetPasswordFailed());
      });
  };
