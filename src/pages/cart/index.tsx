import { InterestedIn } from "@/widgets/interested-in";
import { useTranslation } from "next-i18next";
import { ErrorBoundary } from "react-error-boundary";

import { Info } from "./components/info";

const Cart = () => {
  const { t } = useTranslation("common");
  return (
    <>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <Info />
      </ErrorBoundary>
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <InterestedIn title={t("interestedIn")} />
      </ErrorBoundary>
    </>
  );
};

export default Cart;
