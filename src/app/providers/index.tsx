import { ReactNode } from "react";

import { makeStore } from "@/store";
import { ICartItem } from "@/utils/declarations";
import { Provider as ReduxProvider } from "react-redux";

import { CartProvider } from "@/app/providers/cart.provider";

export function Providers({
  defaultCart,
  children
}: {
  defaultCart: ICartItem[];
  children: ReactNode;
}) {
  return (
    <ReduxProvider store={makeStore()}>
      <CartProvider defaultCart={defaultCart}>{children}</CartProvider>
    </ReduxProvider>
  );
}
