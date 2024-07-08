import React from "react";
import Hero from "./hero/Hero";
import Port from "./port/Port";
import Pres from "./pres/Pres";
import Design from "./design/Design";
import Responsive from "./responsive/Responsive";
import Test from "./test/Test";
import Faq from "./faq/Faq";
import Presence from "./presence/Presence";

const Home = () => {
  return (
    <>
      <Hero />
      <Port />
      <Pres />
      <Design />
      <Responsive />
      <Test />
      <Faq />
      <Presence />
    </>
  );
};

export default Home;
