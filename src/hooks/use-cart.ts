import { useContext } from "react";

import { CartContext } from "@/utils/contexts";

export const useCart = () => useContext(CartContext);
