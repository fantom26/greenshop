import { FC, ReactNode } from "react";

import Head from "next/head";
import { useRouter } from "next/router";

import { NEXT_PUBLIC_APP_URL } from "@constants";
import { IPage } from "@declarations";

interface PageProps {
  meta: IPage;
  children: ReactNode;
}

export const Page: FC<PageProps> = (props) => {
  // **Props
  const { meta, children } = props;
  const { asPath, locale, defaultLocale } = useRouter();

  const urlBuilder = (initialLocale?: string) => {
    const head = NEXT_PUBLIC_APP_URL;
    const lang = initialLocale || locale;

    if (lang !== defaultLocale && asPath === "/") {
      return `${head}/${lang}`;
    }

    if (lang !== defaultLocale && asPath !== "/") {
      return `${head}/${lang}${asPath}`;
    }

    if (asPath === "/") {
      return head;
    }

    return head + asPath;
  };

  return (
    <>
      <Head>
        <title>{meta?.title}</title>
        <meta name="description" content={meta?.description} />
        <link rel="canonical" href={urlBuilder()} />
        TODO fixed this content
        <meta property="og:title" content={meta?.title} />
        <meta property="og:description" content={meta?.description} />
        <meta property="og:site_name" content="Greenshop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={urlBuilder()} />
        <meta property="og:locale" content={locale} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={meta?.title} />
        <meta property="twitter:description" content={meta?.description} />
        {meta?.noIndex && <meta name="robots" content="noindex, nofollow" />}
      </Head>
      {children}
    </>
  );
};
