import { ReactNode } from "react";

import { makeStore } from "@/store";
import { CartProvider } from "@/utils/contexts";
import { ICartItem } from "@/utils/declarations";
import { Provider as ReduxProvider } from "react-redux";

export function Providers({
  defaultCart,
  children
}: {
  defaultCart: ICartItem[];
  children: ReactNode;
}) {
  return <ReduxProvider store={makeStore()}>
    <CartProvider defaultCart={defaultCart}>{children}</CartProvider>
  </ReduxProvider>
}
