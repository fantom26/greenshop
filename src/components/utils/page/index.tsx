import { FC, ReactNode } from "react";

import { IPage } from "@/utils/declarations";
import Head from "next/head";

interface PageProps {
  meta: IPage;
  children: ReactNode;
}

export const Page: FC<PageProps> = ({ meta, children }) => (
  <>
    <Head>
      <title>{meta?.title}</title>
      <meta name="description" content={meta?.description} />
    </Head>
    {children}
  </>
);
