export const isEmptyUser = (user) => {
  for (let key in user) {
    if (user[key]) {
      return false;
    }
  }
  return true;
};
