import { ReactNode } from "react";

export interface ICartItem {
  shortDescription: string;
  poster: string;
  price: string;
  vendor: string;
  sku: string;
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
