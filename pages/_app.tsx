import { NextPageWithLayout } from "@declarations";
import { GlobalStyles } from "@styles";
import type { AppProps as NextAppProps } from "next/app";
import styled from "styled-components";

interface AppProps extends NextAppProps {
  Component: NextPageWithLayout;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100%;
  min-width: 32rem;
  min-height: 100%;
`;

const App = ({ Component, pageProps }: AppProps) => {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <GlobalStyles />
      <Wrapper>{getLayout(<Component {...pageProps} />)}</Wrapper>
    </>
  );
};

export default App;
