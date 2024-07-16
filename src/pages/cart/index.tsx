import { useTranslation } from "next-i18next";

import { InterestedIn } from "@components/common";

import { Info } from "./components/info";

const Cart = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <Info />
      <InterestedIn title={t("interestedIn")} />
    </>
  );
};

export default Cart;
