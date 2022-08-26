import React, { useState, useEffect } from "react";
import leftarrow from "../images/leftarrow.png";
import larrow from "../images/larrow.png";
import rightarrow from "../images/rightarrow.png";
import rarrow from "../images/rarrow.png";

export const SliderItem = ({ children, width }) => {
  return (
    <>
      <div
        className="inline-flex items-center justify-center h-[300px] md:h-[600px] bg-[#D9D9D9] text-white md:py-8"
        style={{ width: width }}
      >
        {children}
      </div>
    </>
  );
};

const Slider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // updating index for updating activeIndex state value to activate translate into 0, 100 and 200 respectively
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }
    setActiveIndex(newIndex);
  };
  useEffect(() => {
    setActiveIndex((state) => {
      return state;
    });
  }, [activeIndex]);

  // pause carousel on mouse hover
  const [paused, setPaused] = useState(false);
  // Setting automatic slide func
  useEffect(() => {
    const interval = setInterval(() => {
      if (!paused) {
        updateIndex(activeIndex + 1);
      }
    }, 2000);
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  });
  return (
    <div className="border">
      <div
        className="overflow-hidden relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="absolute top-0 bottom-0 w-20 text-center left-0 z-50">
          <div className="h-full w-full flex justify-center items-center">
            <img
              src={larrow}
              alt="leftarrow"
              onClick={() => updateIndex(activeIndex - 1)}
              className="w-[30px] "
            />
          </div>
        </div>
        <div className="absolute top-0 bottom-0 w-20  text-center right-0 z-50">
          <div className="h-full w-full flex justify-center items-center">
            <img
              src={rarrow}
              alt="rightarrow"
              onClick={() => updateIndex(activeIndex - 1)}
              className="w-[30px] "
            />
          </div>
        </div>

        <div
          className={`whitespace-nowrap transition-all duration-[0.3s] `}
          style={{ transform: `translateX(${-activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
    </div>
  );
};

export default Slider;
