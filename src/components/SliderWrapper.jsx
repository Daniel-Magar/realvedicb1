import React from "react";
import Slider, { SliderItem } from "./Slider";

const SliderWrapper = () => {
  return (
    <section>
      <div className="mx-[2rem] md:flex md:justify-center md:items-center md:gap-2 md:mx-[6rem]">
        <div className=" w-full  mt-2 md:w-full">
          <div className="w-full">
            <Slider>
              <SliderItem>Item1</SliderItem>
              <SliderItem>Item2</SliderItem>
              <SliderItem>Item3</SliderItem>
            </Slider>
          </div>
        </div>
        <div className=" w-full  mt-2 md:w-full">
          <div className="w-full ">
            <Slider>
              <SliderItem>Item1</SliderItem>
              <SliderItem>Item2</SliderItem>
              <SliderItem>Item3</SliderItem>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderWrapper;
