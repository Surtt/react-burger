const API_URL = "https://norma.nomoreparties.space/api/ingredients";

const getData = async () => {
  const response = await fetch(API_URL);
  if (response.ok) {
    const ingredientsData = await response.json();
    return ingredientsData.data;
  }

  return Promise.reject(new Error(`Ошибка: ${response.status}`));
};

export default getData;
