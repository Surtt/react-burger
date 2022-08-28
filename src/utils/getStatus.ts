export const getStatus = (status: string | undefined) => {
  switch (status) {
    case "done":
      return { text: "Выполнен", color: "Green" };
    case "pending":
      return { text: "Готовится", color: "White" };
    case "created":
      return { text: "Создан", color: "White" };
  }
};
