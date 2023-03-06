import { ReactElement } from "react";

import { Page } from "@components/utils";
import { NextPageWithLayout, PageProps } from "@declarations";
import { MainLayout } from "@layouts";
import Home from "@pages";

const HomePage: NextPageWithLayout<Omit<PageProps, "breadcrumbs">> = ({ meta }) => (
  <Page meta={meta}>
    <Home />
  </Page>
);

HomePage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export default HomePage;
