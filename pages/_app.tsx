import NextApp, { AppContext } from "next/app";
import type { AppProps as NextAppProps } from "next/app";
import Head from "next/head";

import { Provider } from "react-redux";
import styled from "styled-components";

import { CartProvider } from "@contexts";
import { ICartItem, NextPageWithLayout } from "@declarations";
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

    const defaultCart = localStorage.getItem("cart-list");

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

export default App;
