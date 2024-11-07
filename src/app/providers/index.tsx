import { ReactNode } from "react";

import { makeStore } from "@/store";
import { ICartItem } from "@/utils/declarations";
import { Provider as ReduxProvider } from "react-redux";

import { CartProvider } from "@/app/providers/cart.provider";
import { SWRProvider } from "@/app/providers/swr.provider";

export function Providers({
  defaultCart,
  children
}: {
  defaultCart: ICartItem[];
  children: ReactNode;
}) {
  return (
    <SWRProvider>
      <ReduxProvider store={makeStore()}>
        <CartProvider defaultCart={defaultCart}>{children}</CartProvider>
      </ReduxProvider>
    </SWRProvider>
  );
}
