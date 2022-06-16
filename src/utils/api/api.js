const API_URL = "https://norma.nomoreparties.space/api";

const checkResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(new Error(`Ошибка: ${response.status}`));
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
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return checkResponse(response);
};
