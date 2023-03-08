import { FC } from "react";

import { Blog, Hero, Products } from "./components";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Products />
      <Blog />
    </>
  );
};

export default Home;
