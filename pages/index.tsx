import { ReactElement } from "react";

import { NextPageWithLayout, PageProps } from "@declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Page } from "@components/utils";
import { MainLayout } from "@layouts";
import { Home } from "@pages";
import { wrapper } from "@store";

const HomePage: NextPageWithLayout<Omit<PageProps, "breadcrumbs">> = ({ meta }) => (
  <Page meta={meta}>
    <Home />
  </Page>
);

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = wrapper.getServerSideProps(() => async ({ locale }) => {
  const translations = await serverSideTranslations(locale);

  return {
    props: {
      ...translations
    }
  };
});

export default HomePage;
