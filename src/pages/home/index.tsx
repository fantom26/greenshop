import { FC } from "react";

import { ErrorBoundary } from "react-error-boundary";

import { Blog, Hero, Products } from "./components";

const Home: FC = () => (
  <>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Hero />
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Products />
    </ErrorBoundary>
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <Blog />
    </ErrorBoundary>
  </>
);

export default Home;
