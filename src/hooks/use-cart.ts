import { useContext } from "react";

import { CartContext } from "@/utils/contexts";

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within the CartProvider");
  }
  return context;
};
