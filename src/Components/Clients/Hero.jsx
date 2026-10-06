// src/pages/Home.jsx
import React from "react";
import Hero from "../Clients/section/hero";
import MoreThanAChef from "../Clients/section/MoreThanAChef";
import SimoExplains from "../Clients/section/SimoExplains";
import MoroccoOnAPlate from "../Clients/section/MoroccoOnAPlate";
import ManBehindChef from "../Clients/section/ManBehindChef";
import CTA from "../Clients/section/CTA";

const Home = () => {
  return (
    <>
      <Hero />
      <MoreThanAChef />
      <SimoExplains />
      <MoroccoOnAPlate />
      <ManBehindChef />
      <CTA />
    </>
  );
};

export default Home;