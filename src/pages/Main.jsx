import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SliderWrapper from "../components/SliderWrapper";
import Menu from "../components/Menu";
import ShopByCategory from "../components/ShopByCategory";
import BestSeller from "../components/BestSeller";
import ConsultStory from "../components/ConsultStory";
import Team from "../components/Team";
import FollowUs from "../components/FollowUs";
import Testimony from "../components/Testimony";

const Main = () => {
  return (
    <div className="lg:bg-[#f2f2f2]">
      <Navbar />
      <Search />
      <Menu />
      <SliderWrapper />
      <ShopByCategory />
      <BestSeller />
      <ConsultStory />
      <Team />
      <FollowUs />
      <Testimony />
    </div>
  );
};

export default Main;
