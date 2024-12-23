import { ReactElement } from "react";

import { PageProps } from "@/utils/declarations";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { AuthLayout, Page } from "@/app/layouts";
import { SignIn } from "@/pages/sign-in";

function SignPage({ meta }: Omit<PageProps, "breadcrumbs">) {
  return (
    <Page meta={meta}>
      <SignIn />
    </Page>
  );
}

SignPage.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

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
