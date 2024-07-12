/* eslint-disable @typescript-eslint/no-empty-function */
import { FC, createContext, useEffect, useState } from "react";

import { generateDays } from "@/utils/helpers";
import { setCookie } from "cookies-next";

import { CART_LIST } from "@/utils/constants";
import { CartContextProps, CartProviderProps, ICartItem } from "@/utils/declarations";

const initialState: CartContextProps = {
  cartItems: [],
  cartQuantity: 0,
  sumOfOrder: 0,
  getProductQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  countPriceByQuantity: () => {},
  resetCart: () => {}
};

export const CartContext = createContext(initialState);

export const CartProvider: FC<CartProviderProps> = (props) => {
  const { defaultCart = [], children } = props;

  const [cartItems, setCartItems] = useState<ICartItem[]>(defaultCart);

  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0);

  const sumOfOrder = cartItems.reduce((sum, item) => +item.price * item.quantity + sum, 0);

  const getProductQuantity = (id: string) => cartItems.find((item) => item._id === id)?.quantity || 0;

  const increaseCartQuantity = (product: ICartItem) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item._id === product._id)) {
        return [...currItems, product];
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const decreaseCartQuantity = (product: ICartItem) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item._id === product._id)?.quantity === 1) {
        return currItems.filter((item) => item._id !== product._id);
      } else {
        return currItems.map((item) => {
          if (item._id === product._id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const countPriceByQuantity = (id: string) => {
    const currentItem = cartItems.find((item) => item._id === id);

    return currentItem.price * currentItem.quantity;
  };

  const removeFromCart = (id: string) => setCartItems((currItems) => currItems.filter((item) => item._id !== id));

  const resetCart = () => setCartItems([]);

  useEffect(() => {
    if (!setCookie) return;
    setCookie(CART_LIST, JSON.stringify(cartItems), {
      expires: generateDays(7)
    });
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        sumOfOrder,
        getProductQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        countPriceByQuantity,
        resetCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
