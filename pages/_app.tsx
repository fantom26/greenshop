import { useEffect } from "react";

import { CART_LIST, LOADER_CLASSNAME } from "@/utils/constants";
import { CartProvider } from "@/utils/contexts";
import { ICartItem, NextPageWithLayout } from "@/utils/declarations";
import { getCookie } from "cookies-next";
import { appWithTranslation } from "next-i18next";
import NextApp, { AppContext } from "next/app";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import styled from "styled-components";

import { makeStore } from "@store";
import { GlobalStyles } from "@styles";

interface AppProps extends NextAppProps {
  Component: NextPageWithLayout;
  defaultCart?: ICartItem[];
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-width: 37.5rem;
  min-height: 100%;
`;

const App = ({ Component, pageProps, defaultCart = [] }: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById(LOADER_CLASSNAME);

      const handleStart = () => {
        if (loader) loader.style.display = "flex";
      };

      const handleStop = () => {
        if (loader) loader.style.display = "none";
      };

      router.events.on("routeChangeStart", handleStart);
      router.events.on("routeChangeComplete", handleStop);
      router.events.on("routeChangeError", handleStop);

      return () => {
        router.events.off("routeChangeStart", handleStart);
        router.events.off("routeChangeComplete", handleStop);
        router.events.off("routeChangeError", handleStop);
      };
    }
  }, [router]);

  // Hide splash screen shen we are server side
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById(LOADER_CLASSNAME);
      if (loader) loader.style.display = "none";
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={makeStore()}>
        <CartProvider defaultCart={defaultCart}>
          <GlobalStyles />
          <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>
        </CartProvider>
      </Provider>
    </>
  );
};

App.getInitialProps = async (ctx: AppContext) => {
  try {
    const appProps = await NextApp.getInitialProps(ctx);

    const defaultCart = JSON.parse(getCookie(CART_LIST, { req: ctx.ctx.req, res: ctx.ctx.res }) as string);

    return {
      ...appProps,
      defaultCart
    };
  } catch (e) {
    return {
      notFound: true
    };
  }
};

export default appWithTranslation(App);
