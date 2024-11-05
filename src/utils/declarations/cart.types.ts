import { ReactNode } from "react";

import { IFile } from "./file.types";

export interface ICartItem {
  poster: IFile;
  price: number;
  name: string;
  sku: string;
  _id: string;
  quantity: number;
}

export interface CartProviderProps {
  defaultCart: ICartItem[];
  children: ReactNode;
}

export interface CartContextProps {
  cartItems: ICartItem[];
  cartQuantity: number;
  sumOfOrder: number;
  getProductQuantity: (id: string) => number;
  increaseCartQuantity: (product: ICartItem) => void;
  decreaseCartQuantity: (product: ICartItem) => void;
  countPriceByQuantity: (id: string) => number;
  removeFromCart: (id: string) => void;
  resetCart: () => void;
}
