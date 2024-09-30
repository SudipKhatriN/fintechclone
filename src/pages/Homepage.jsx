import React from "react";
import HomeHero from "../components/HomeHero";
import CustomerCount from "../components/CustomerCount";
import WhyUs from "../components/WhyUs";
import Testimonal from "../components/Testimonal";
import ServingList from "../components/ServingList";
import TrusteBy from "../components/TrusteBy";

function Homepage() {
  return (
    <main className="home">
      <HomeHero />
      <CustomerCount />
      <WhyUs />
      <Testimonal />
      <ServingList />
      <TrusteBy />
    </main>
  );
}

export default Homepage;
