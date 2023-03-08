import { FC } from "react";

import { Blog, Hero } from "./components";

const Home: FC = () => {
  return (
    <>
      <Hero />
      <Blog />
    </>
  );
};

export default Home;
