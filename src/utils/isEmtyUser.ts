interface IStringIndex {
  [key: string]: string;
}

export const isEmptyUser = (user: IStringIndex) => {
  for (let key in user) {
    if (user[key]) {
      return false;
    }
  }
  return true;
};
