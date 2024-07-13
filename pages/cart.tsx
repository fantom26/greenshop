import { ReactElement } from "react";

import { NextPageWithLayout, PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Breadcrumbs } from "@components/ui";
import { Page } from "@components/utils";
import { MainLayout } from "@layouts";
import { Cart } from "@pages";
import { wrapper } from "@store";
import { getPageInfo, getRunningQueriesThunk } from "@store/api";

const CartPage: NextPageWithLayout<PageProps> = ({ meta, breadcrumbs }) => (
  <Page meta={meta}>
    <Breadcrumbs items={breadcrumbs} />
    <Cart />
  </Page>
);

CartPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ locale }) => {
  store.dispatch(getPageInfo.initiate("Home"));
  store.dispatch(getPageInfo.initiate("Cart"));

  const [home, cart] = await Promise.all(store.dispatch(getRunningQueriesThunk()));
  const [homeData] = home.data as any;
  const [cartData] = cart.data as any;

  const translations = await serverSideTranslations(locale, ["common", "footer", "cart", "validation"]);

  return {
    props: {
      ...translations,
      meta: cartData.breadcrumb,
      breadcrumbs: [{ t: homeData?.breadcrumb || "", route: "/" }, { t: cartData?.breadcrumb || "" }]
    }
  };
});

export default CartPage;
