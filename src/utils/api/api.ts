import { getCookie } from "../getCookie";
import { setCookie } from "../setCookie";
import { IOrderById, IUserData } from "../../types";

const API_URL = "https://norma.nomoreparties.space/api";
export const WS_URL = "wss://norma.nomoreparties.space/orders/all";

const checkResponse = (response: Response) => {
  return response.ok
    ? response.json()
    : response.json().then((err) => Promise.reject(err));
};

export const getData = async () => {
  const response = await fetch(`${API_URL}/ingredients`);
  return checkResponse(response);
};

export const placeOrder = async (ingredients: IOrderById) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(ingredients),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};

export const signUpUserRequest = async (user: IUserData) => {
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

export const signInUserRequest = async (user: IUserData) => {
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

export const logOutRequest = async (data: { token: string }) => {
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

export const fetchWithRefresh = async (url: string, options: RequestInit) => {
  try {
    const res = await fetch(url, options);
    return await checkResponse(res);
  } catch (err) {
    if (err instanceof Error) {
      console.log(err);
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken();
        if (!refreshData.success) {
          Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        const authToken = refreshData.accessToken.split("Bearer ")[1];
        setCookie("token", authToken);
        (options.headers as { [key: string]: string }).authorization =
          refreshData.accessToken;
        const res = await fetch(url, options);
        return await checkResponse(res);
      } else {
        return Promise.reject(err);
      }
    }
  }
};

export const getUserData = async () => {
  return await fetchWithRefresh(`${API_URL}/auth/user`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const updateUserData = async (data: IUserData) => {
  return await fetchWithRefresh(`${API_URL}/auth/user`, {
    method: "PATCH",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + getCookie("token"),
    },
  });
};

export const forgotPasswordRequest = async (data: IUserData) => {
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

export const resetPasswordRequest = async (data: IUserData) => {
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

export const getOrderRequestData = async (number: string) => {
  const response = await fetch(`${API_URL}/orders/${number}`, {
    method: "GET",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    redirect: "follow",
    referrerPolicy: "no-referrer",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};
