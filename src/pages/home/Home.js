import React from "react";
import Hero from "./hero/Hero";
import Port from "./port/Port";
import Pres from "./pres/Pres";
import Design from "./design/Design";
import Responsive from "./responsive/Responsive";
import Test from "./test/Test";
import Presence from "./presence/Presence";
import "../../mix.scss";
const Home = () => {
  return (
    <>
      <Hero />
      <Port />
      <Pres />
      <Design />
      <Responsive />
      <Test />
      <Presence />
    </>
  );
};

export default Home;
