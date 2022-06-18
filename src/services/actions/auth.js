import {
  forgotPasswordRequest,
  resetPasswordRequest,
  signInUserRequest,
  signUpUserRequest,
} from "../../utils/api/api";
import { setCookie } from "../../utils/setCookie";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";

export const RESET_PASSWORD_REQUEST = "RESET_PASSWORD_REQUEST";
export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";

export const registerRequest = () => {
  return {
    type: REGISTER_REQUEST,
  };
};

export const registerSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const registerFailed = () => {
  return {
    type: REGISTER_FAILED,
  };
};

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  };
};

export const loginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const loginFailed = () => {
  return {
    type: LOGIN_FAILED,
  };
};

export const forgotPasswordReq = () => {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
};

export const forgotPasswordSuccess = (payload) => {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
    payload,
  };
};

export const forgotPasswordFailed = () => {
  return {
    type: FORGOT_PASSWORD_FAILED,
  };
};

export const resetPasswordReq = () => {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
};

export const resetPasswordSuccess = (payload) => {
  return {
    type: RESET_PASSWORD_SUCCESS,
    payload,
  };
};

export const resetPasswordFailed = () => {
  return {
    type: RESET_PASSWORD_FAILED,
  };
};

export const registerUser = (data) => (dispatch) => {
  dispatch(registerRequest());
  signUpUserRequest(data)
    .then((res) => {
      if (res && res.success) {
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        dispatch(registerSuccess(res.user));
      } else {
        dispatch(registerFailed());
      }
    })
    .catch((error) => {
      dispatch(registerFailed());
    });
};

export const loginUser = (data) => (dispatch) => {
  dispatch(loginRequest());
  signInUserRequest(data)
    .then((res) => {
      if (res && res.success) {
        const authToken = res.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        dispatch(loginSuccess(res.user));
      } else {
        dispatch(loginFailed());
      }
    })
    .catch((error) => {
      dispatch(loginFailed());
    });
};

export const forgotPassword = (data) => (dispatch) => {
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

export const resetPassword = (data) => (dispatch) => {
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
