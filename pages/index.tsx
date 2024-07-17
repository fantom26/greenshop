import { ReactElement } from "react";

import { Home } from "@/pages";
import { wrapper } from "@/store";
import { PageProps } from "@/utils/declarations";
import { MainLayout, Page } from "@/widgets/layouts";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const HomePage = ({ meta }: Omit<PageProps, "breadcrumbs">) => (
  <Page meta={meta}>
    <Home />
  </Page>
);

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export const getServerSideProps = wrapper.getServerSideProps(() => async ({ locale }) => {
  const translations = await serverSideTranslations(locale as string, ["common", "footer", "home", "validation"]);

  return {
    props: {
      ...translations
    }
  };
});

export default HomePage;
