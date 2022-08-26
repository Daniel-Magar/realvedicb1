import React from "react";
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import SliderWrapper from "../components/SliderWrapper";
import Menu from "../components/Menu";
import ShopByCategory from "../components/ShopByCategory";
import BestSeller from "../components/BestSeller";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Menu />
      <SliderWrapper />
      <ShopByCategory />
      <BestSeller />
    </div>
  );
};

export default Main;
