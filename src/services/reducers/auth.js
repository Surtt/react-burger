import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
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

    default: {
      return state;
    }
  }
};
