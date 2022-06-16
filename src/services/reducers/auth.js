import {
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

    default: {
      return state;
    }
  }
};
