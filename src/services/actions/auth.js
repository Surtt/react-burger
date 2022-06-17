import { signInUserRequest, signUpUserRequest } from "../../utils/api/api";
import { setCookie } from "../../utils/setCookie";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILED = "LOGIN_FAILED";

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
