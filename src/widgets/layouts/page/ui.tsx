import { ReactNode } from "react";

import { IPage } from "@/utils/declarations";
import Head from "next/head";

interface PageProps {
  meta: IPage;
  children: ReactNode;
}

function Page({ meta, children }: PageProps) {
  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
      </Head>
      {children}
    </>
  );
}

export default Page;
