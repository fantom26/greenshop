import { ReactElement } from "react";

import { PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { SignIn } from "@/pages/sign-in";
import { MainLayout, Page } from "@/widgets/layouts";

function SignPage({ meta }: Omit<PageProps, "breadcrumbs">) {
  return (
    <Page meta={meta}>
      <SignIn />
    </Page>
  );
}

SignPage.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>;

export async function getServerSideProps({ locale }: { locale: string }) {
  const translations = await serverSideTranslations(locale, [
    "common",
    "footer",
    "validation"
  ]);

  return {
    props: {
      ...translations
    }
  };
}

export default SignPage;
