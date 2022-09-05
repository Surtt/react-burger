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
import { IUserData } from "../../types";
import { TAuthActions } from "../actions/auth";

interface IAuthState {
  user: IUserData;
  registerRequest: boolean;
  registerFailed: boolean;

  loginRequest: boolean;
  loginFailed: boolean;

  logoutRequest: boolean;
  logoutFailed: boolean;

  userRequest: boolean;
  userFailed: boolean;

  updateUserRequest: boolean;
  updateUserFailed: boolean;

  forgotPasswordRequest: boolean;
  forgotPasswordFailed: boolean;
  isUserSendPasswordChangeReq: boolean;

  resetPasswordRequest: boolean;
  resetPasswordFailed: boolean;
  isUserChangedPassword: boolean;
}

export const initialState: IAuthState = {
  user: {
    name: "",
    email: "",
  },
  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutRequest: false,
  logoutFailed: false,

  userRequest: false,
  userFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  isUserSendPasswordChangeReq: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
  isUserChangedPassword: false,
};

export const auth = (
  state = initialState,
  action: TAuthActions
): IAuthState => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return { ...state, registerRequest: true, registerFailed: false };
    }
    case REGISTER_SUCCESS: {
      const { name, email } = action.payload;
      return {
        ...state,
        user: { ...state.user, name, email },
        registerRequest: false,
      };
    }
    case REGISTER_FAILED: {
      return { ...state, registerRequest: false, registerFailed: true };
    }

    case LOGIN_REQUEST: {
      return { ...state, loginRequest: true, loginFailed: false };
    }
    case LOGIN_SUCCESS: {
      const { name, email } = action.payload;
      return {
        ...state,
        user: { ...state.user, name, email },
        loginRequest: false,
      };
    }
    case LOGIN_FAILED: {
      return { ...state, loginRequest: false, loginFailed: true };
    }

    case LOGOUT_REQUEST: {
      return { ...state, logoutRequest: true, logoutFailed: false };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        user: { ...state.user, name: "", email: "" },
        logoutRequest: false,
      };
    }
    case LOGOUT_FAILED: {
      return { ...state, logoutRequest: false, logoutFailed: true };
    }

    case USER_REQUEST: {
      return { ...state, userRequest: true, userFailed: false };
    }
    case USER_SUCCESS: {
      const { name, email } = action.payload;
      return {
        ...state,
        user: { ...state.user, name, email },
        userRequest: false,
      };
    }
    case USER_FAILED: {
      return { ...state, userRequest: false, userFailed: true };
    }

    case UPDATE_USER_REQUEST: {
      return { ...state, updateUserRequest: true, updateUserFailed: false };
    }
    case UPDATE_USER_SUCCESS: {
      const { name, email } = action.payload;
      return {
        ...state,
        user: { ...state.user, name, email },
        updateUserRequest: false,
      };
    }
    case UPDATE_USER_FAILED: {
      return { ...state, updateUserRequest: false, updateUserFailed: true };
    }

    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        forgotPasswordRequest: true,
        forgotPasswordFailed: false,
        isUserSendPasswordChangeReq: false,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        forgotPasswordRequest: false,
        isUserSendPasswordChangeReq: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        forgotPasswordRequest: false,
        forgotPasswordFailed: true,
        isUserSendPasswordChangeReq: false,
      };
    }

    case RESET_PASSWORD_REQUEST: {
      return {
        ...state,
        resetPasswordRequest: true,
        resetPasswordFailed: false,
        isUserChangedPassword: false,
      };
    }
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        resetPasswordRequest: false,
        isUserChangedPassword: true,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        resetPasswordRequest: false,
        resetPasswordFailed: true,
        isUserChangedPassword: false,
      };
    }
    default: {
      return state;
    }
  }
};
