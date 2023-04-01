import { InterestedIn } from "@components/sections";
import { useTranslation } from "@hooks";

import { Info } from "./components/info";

const Cart = () => {
  const t = useTranslation();
  return (
    <>
      <Info />
      <InterestedIn title={t.common.interestedIn} />
    </>
  );
};

export default Cart;
