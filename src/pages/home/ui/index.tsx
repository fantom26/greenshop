import { ErrorBoundary } from "react-error-boundary";

import { Blog } from "./blog";
import { Hero } from "./hero";
import { Products } from "./products";

export function Home() {
  return (
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
}
