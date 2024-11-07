import { ReactElement } from "react";

import { PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { Home } from "@/pages/home";
import { MainLayout, Page } from "@/widgets/layouts";

function HomePage({ meta }: Omit<PageProps, "breadcrumbs">) {
  return (
    <Page meta={meta}>
      <Home />
    </Page>
  );
}

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export async function getServerSideProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    "common",
    "footer",
    "home",
    "validation"
  ]);

  return {
    props: {
      ...translations
    }
  };
}

export default HomePage;
