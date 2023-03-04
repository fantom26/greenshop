import { FC, createContext, useEffect, useState } from "react";

import { CartContextProps, CartProviderProps, ICartItem } from "@declarations";

const initialState: CartContextProps = {
  cartItems: [],
  cartQuantity: 0,
  sumOfOrder: 0,
  getProductQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  resetCart: () => {},
};

export const CartContext = createContext(initialState);

export const CartProvider: FC<CartProviderProps> = (props) => {
  const { defaultCart = [], children } = props;

  const [cartItems, setCartItems] = useState<ICartItem[]>(defaultCart);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const sumOfOrder = cartItems.reduce(
    (sum, item) => +item.price * item.quantity + sum,
    0
  );

  const getProductQuantity = (id: string) =>
    cartItems.find((item) => item.vendor === id)?.quantity || 0;

  const increaseCartQuantity = (product: ICartItem) => {
    setCartItems((currItems) => {
      if (!currItems.find((item) => item.vendor === product.vendor)) {
        return [...currItems, product];
      } else {
        return currItems.map((item) => {
          if (item.vendor === product.vendor) {
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
      if (
        currItems.find((item) => item.vendor === product.vendor)?.quantity === 1
      ) {
        return currItems.filter((item) => item.vendor !== product.vendor);
      } else {
        return currItems.map((item) => {
          if (item.vendor === product.vendor) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const removeFromCart = (id: string) =>
    setCartItems((currItems) => currItems.filter((item) => item.vendor !== id));

  const resetCart = () => setCartItems([]);

  useEffect(() => {
    localStorage.setItem("cart-list", JSON.stringify(cartItems));
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
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
