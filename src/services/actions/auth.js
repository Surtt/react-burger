import {
  forgotPasswordRequest,
  getUserData,
  logOutRequest,
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

export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const USER_REQUEST = "USER_REQUEST";
export const USER_SUCCESS = "USER_SUCCESS";
export const USER_FAILED = "USER_FAILED";

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

export const logoutRequest = () => {
  return {
    type: LOGOUT_REQUEST,
  };
};

export const logoutSuccess = (payload) => {
  return {
    type: LOGOUT_SUCCESS,
    payload,
  };
};

export const logoutFailed = () => {
  return {
    type: LOGOUT_FAILED,
  };
};

export const userRequest = () => {
  return {
    type: USER_REQUEST,
  };
};

export const userSuccess = (payload) => {
  return {
    type: USER_SUCCESS,
    payload,
  };
};

export const userFailed = () => {
  return {
    type: USER_FAILED,
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

export const loginUser = (data) => (dispatch) => {
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

export const logoutUser = (data) => (dispatch) => {
  dispatch(logoutRequest());
  logOutRequest(data)
    .then((res) => {
      if (res && res.success) {
        dispatch(logoutSuccess(res.user));
      } else {
        dispatch(logoutFailed());
      }
    })
    .catch((error) => {
      dispatch(logoutFailed());
    });
};

export const getUser = () => (dispatch) => {
  dispatch(userRequest());
  getUserData()
    .then((res) => {
      console.log(res);
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
