import { IUserData } from "../types";

export interface IStringIndex {
  [key: string]: string;
}

export const isEmptyUser = (user: IUserData) => {
  for (let key in user) {
    if (user[key]) {
      return false;
    }
  }
  return true;
};
