import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_SUCCESS,
} from "../actions/auth";

const initialState = {
  user: {
    name: "",
    email: "",
    password: "",
  },
  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  forgotPasswordRequest: false,
  forgotPasswordFailed: false,
  isUserSendPasswordChangeReq: false,

  resetPasswordRequest: false,
  resetPasswordFailed: false,
  isUserChangedPassword: false,
};

export const auth = (state = initialState, action) => {
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
