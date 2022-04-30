export interface Item {
  id: number,
  itemName: string,
  imgPath: string,
  price: number,
  counts: number,
  genre: string,
};

export interface User {
  id: number,
  uuid: string,
  userName: string,
  address: string,
  addressNumber: string,
  email: string,
  memo?: string,
};
