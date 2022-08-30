import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SliderWrapper from "../components/SliderWrapper";
import Menu from "../components/Menu";
import ShopByCategory from "../components/ShopByCategory";
import BestSeller from "../components/BestSeller";
import ConsultStory from "../components/ConsultStory";
import Team from "../components/Team";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Menu />
      <SliderWrapper />
      <ShopByCategory />
      <BestSeller />
      <ConsultStory />
      <Team />
    </div>
  );
};

export default Main;
