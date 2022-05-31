const API_URL = "https://norma.nomoreparties.space/api";

export const getData = async () => {
  const response = await fetch(`${API_URL}/ingredients`);
  if (response.ok) {
    const ingredientsData = await response.json();
    return ingredientsData.data;
  }

  return Promise.reject(new Error(`Ошибка: ${response.status}`));
};

export const placeOrder = async (ingredients) => {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    body: JSON.stringify(ingredients),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};
