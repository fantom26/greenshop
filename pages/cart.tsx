import { ReactElement } from "react";

import { IPage, PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { MainLayout, Page } from "@/app/layouts";
import { fetcher } from "@/app/providers/swr.provider";
import { Cart } from "@/pages/cart";
import { Breadcrumbs } from "@/shared/ui";

function CartPage({ meta, breadcrumbs }: PageProps) {
  return (
    <Page meta={meta}>
      <Breadcrumbs items={breadcrumbs} />
      <Cart />
    </Page>
  );
}

CartPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export async function getServerSideProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale as string, [
    "common",
    "footer",
    "cart",
    "validation"
  ]);

  const [home, cart] = await Promise.all([
    fetcher<[IPage]>("/pages?title=Home"),
    fetcher<[IPage]>("/pages?title=Cart")
  ]);
  const [homeData] = home;
  const [cartData] = cart;

  return {
    props: {
      ...translations,
      meta: cartData.breadcrumb,
      breadcrumbs: [
        { t: homeData.breadcrumb || "", route: "/" },
        { t: cartData.breadcrumb || "" }
      ]
    }
  };
}

export default CartPage;
