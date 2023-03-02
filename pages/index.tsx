import { Page } from "@components/utils";
import { NextPageWithLayout } from "@declarations";
import { PageProps } from "@declarations/page.types";
import { MainLayout } from "@layouts";
import Home from "@pages";
import { ReactElement } from "react";

const HomePage: NextPageWithLayout<Omit<PageProps, "breadcrumbs">> = ({
  meta,
}) => {
  return (
    <Page meta={meta}>
      <Home />
    </Page>
  );
};

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
