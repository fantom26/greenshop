import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";

import { DateManager } from "@/shared/managers";
import { CART_LIST, SHIPPING_PRICE } from "@/utils/constants";
import {
  CartContextProps,
  CartProviderProps,
  ICartItem
} from "@/utils/declarations";
import { setCookie } from "cookies-next";

const initialState: CartContextProps = {
  cartItems: [],
  cartSummary: {
    total: SHIPPING_PRICE,
    sum: 0,
    quantity: 0,
    shippingPrice: SHIPPING_PRICE
  },
  getProductQuantity: () => 0,
  increaseCartQuantity: () => {},
  decreaseCartQuantity: () => {},
  countPriceByQuantity: () => 0
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

  const cartSummary = useMemo(
    () =>
      cartItems.reduce((acc, item) => {
        const sumPart = +item.price * item.quantity;

        return {
          ...acc,
          quantity: acc.quantity + item.quantity,
          sum: acc.sum + sumPart,
          total: acc.total + sumPart
        };
      }, initialState.cartSummary),
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

  useEffect(() => {
    if (!setCookie) {
      return;
    }

    setCookie(CART_LIST, JSON.stringify(cartItems), {
      expires: DateManager.generateDays(7)
    });
  }, [cartItems]);

  const value = useMemo(
    () => ({
      cartItems,
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      countPriceByQuantity,
      cartSummary
    }),
    [
      cartItems,
      getProductQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      countPriceByQuantity,
      cartSummary
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
