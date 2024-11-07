import { ReactNode } from "react";

import { ICartItem } from "@/utils/declarations";

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
      <CartProvider defaultCart={defaultCart}>{children}</CartProvider>
    </SWRProvider>
  );
}
