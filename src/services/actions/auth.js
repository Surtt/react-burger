import { signUpUserRequest } from "../../utils/api/api";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";

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

export const registerUser = (data) => (dispatch) => {
  dispatch(registerRequest());
  signUpUserRequest(data)
    .then((res) => {
      if (res && res.success) {
        dispatch(registerSuccess(res.user));
      } else {
        dispatch(registerFailed());
      }
    })
    .catch((error) => {
      dispatch(registerFailed());
    });
};
