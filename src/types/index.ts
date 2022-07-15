export interface IIngredient {
  calories: number;
  carbohydrates: number;
  fat: number;
  image: string;
  image_large: string;
  image_mobile: string;
  name: string;
  price: number;
  proteins: number;
  type: string;
  uuid: string;
  __v: number;
  _id: string;
}

export interface ILocationState {
  from: {
    pathname: string;
  };
}

export interface IUserData {
  name?: string;
  email: string;
  password: string;
}
