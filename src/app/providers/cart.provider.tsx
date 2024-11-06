import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import { CART_LIST } from "@/utils/constants";
import {
  CartContextProps,
  CartProviderProps,
  ICartItem
} from "@/utils/declarations";
import { generateDays } from "@/utils/helpers";
import { setCookie } from "cookies-next";

const initialState: CartContextProps = {
  cartItems: [],
  cartQuantity: 0,
  sumOfOrder: 0,
  getProductQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  removeFromCart: () => {},
  countPriceByQuantity: () => 0,
  resetCart: () => {}
};

export const CartContext = createContext(initialState);

const getProductById = (products: ICartItem[], productId: ICartItem["_id"]) =>
  products.find((item) => item._id === productId);

const removeProductById = (
  products: ICartItem[],
  productId: ICartItem["_id"]
) => products.filter((item) => item._id !== productId);

export function CartProvider({
  defaultCart = [],
  children
}: CartProviderProps) {
  const [cartItems, setCartItems] = useState<ICartItem[]>(defaultCart);

  const cartQuantity = useMemo(
    () => cartItems.reduce((quantity, item) => item.quantity + quantity, 0),
    [cartItems]
  );

  const sumOfOrder = useMemo(
    () => cartItems.reduce((sum, item) => +item.price * item.quantity + sum, 0),
    [cartItems]
  );

  const getProductQuantity = useCallback(
    (id: ICartItem["_id"]) => getProductById(cartItems, id)?.quantity || 0,
    [cartItems]
  );

  const increaseCartQuantity = useCallback(
    (product: ICartItem) => {
      setCartItems((currItems) => {
        const currItem = getProductById(currItems, product._id);

        if (!currItem) {
          return [...currItems, product];
        }

        return currItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      });
    },
    [setCartItems]
  );

  const removeFromCart = useCallback(
    (id: string) =>
      setCartItems((currItems) => removeProductById(currItems, id)),
    [setCartItems]
  );

  const decreaseCartQuantity = useCallback(
    (product: ICartItem) => {
      setCartItems((currItems) => {
        const currItem = getProductById(currItems, product._id);

        if (!currItem) return currItems;
        if (currItem.quantity === 1) {
          return removeProductById(currItems, product._id);
        }

        return currItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      });
    },
    [setCartItems]
  );

  const countPriceByQuantity = useCallback(
    (id: ICartItem["_id"]) => {
      const currentItem = getProductById(cartItems, id);

      return currentItem ? currentItem.price * currentItem.quantity : 0;
    },
    [cartItems]
  );

  const resetCart = useCallback(() => setCartItems([]), []);

  useEffect(() => {
    if (!setCookie) return;
    setCookie(CART_LIST, JSON.stringify(cartItems), {
      expires: generateDays(7)
    });
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      cartQuantity,
      sumOfOrder,
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      countPriceByQuantity,
      resetCart
    }),
    [
      cartItems,
      cartQuantity,
      sumOfOrder,
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
      countPriceByQuantity,
      resetCart
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
