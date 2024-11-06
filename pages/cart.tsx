import { ReactElement } from "react";

import { wrapper } from "@/store";
import { getPageInfo, getRunningQueriesThunk } from "@/store/api";
import { PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Cart } from "@/pages/cart";
import { Breadcrumbs } from "@/shared/ui";
import { MainLayout, Page } from "@/widgets/layouts";

const CartPage = ({ meta, breadcrumbs }: PageProps) => (
  <Page meta={meta}>
    <Breadcrumbs items={breadcrumbs} />
    <Cart />
  </Page>
);

CartPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ locale }) => {
      store.dispatch(getPageInfo.initiate("Home"));
      store.dispatch(getPageInfo.initiate("Cart"));

      const [home, cart] = await Promise.all(
        store.dispatch(getRunningQueriesThunk())
      );
      const [homeData] = home.data as any;
      const [cartData] = cart.data as any;

      const translations = await serverSideTranslations(locale as string, [
        "common",
        "footer",
        "cart",
        "validation"
      ]);

      return {
        props: {
          ...translations,
          meta: cartData.breadcrumb,
          breadcrumbs: [
            { t: homeData?.breadcrumb || "", route: "/" },
            { t: cartData?.breadcrumb || "" }
          ]
        }
      };
    }
);

export default CartPage;
