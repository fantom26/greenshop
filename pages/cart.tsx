import { ReactElement } from "react";

import { Breadcrumbs } from "@components/ui";
import { Page } from "@components/utils";
import { NextPageWithLayout, PageProps } from "@declarations";
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

export const getServerSideProps = wrapper.getServerSideProps((store) => async (ctx) => {
  store.dispatch(getPageInfo.initiate("Home"));
  store.dispatch(getPageInfo.initiate("Cart"));

  const [home, cart] = await Promise.all(store.dispatch(getRunningQueriesThunk()));
  const [homeData] = home.data as any;
  const [cartData] = cart.data as any;

  return {
    props: {
      meta: cartData.breadcrumb,
      breadcrumbs: [{ t: homeData?.breadcrumb || "", route: "/" }, { t: cartData?.breadcrumb || "" }]
    }
  };
});

export default CartPage;
