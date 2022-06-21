import { getCookie } from "../getCookie";
import { setCookie } from "../setCookie";

const API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const getData = async () => {
  const response = await fetch(`${API_URL}/ingredients`);
  return checkResponse(response);
};

export const placeOrder = async (ingredients) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(ingredients),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const signUpUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const signInUserRequest = async (user) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const logOutRequest = async (data) => {
  const response = await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const refreshToken = async () => {
  const response = await fetch(`${API_URL}/auth/token`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const fetchWithRefresh = async (url, options) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    console.log(err);
    if (err.message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      setCookie("token", refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const res = await fetch(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const getUserData = async () => {
  const response = await fetchWithRefresh(`${API_URL}/auth/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie("token"),
    },
  });
  console.log(response, "here");
  return checkResponse(response);
};

export const forgotPasswordRequest = async (data) => {
  const response = await fetch(`${API_URL}/password-reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const resetPasswordRequest = async (data) => {
  const response = await fetch(`${API_URL}/password-reset/reset`, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};
