import { ReactNode } from "react";

import { IFile } from "./file.types";

export interface ICartItem {
  poster: IFile;
  price: number;
  sku: string;
  _id: string;
  quantity?: number;
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
  removeFromCart: (id: string) => void;
  resetCart: () => void;
}
