import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LeftArr from "../images/larrow.png";
import RightArr from "../images/rarrow.png";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const FollowUs = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const arrowStyle = {
    background: "transparent",
    border: 0,
    color: "#fff",
    fontSize: "80px",
    position: "absolute",
  };
  const CustomRight = ({ onClick }) => (
    <button className="arrow right" onClick={onClick} style={arrowStyle}>
      <img
        src={RightArr}
        alt=""
        className="w-full h-[25px] lg:w-full lg:h-full"
      />
    </button>
  );
  const CustomLeft = ({ onClick }) => (
    <button className="arrow left" onClick={onClick} style={arrowStyle}>
      <img
        src={LeftArr}
        alt=""
        className="w-full h-[25px] lg:w-full lg:h-full"
      />
    </button>
  );
  const CustCarouselList = {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    // position: relative;
  };

  return (
    <>
      <section className=" my-1">
        <div className="mx-8 my-2 lg:mx-[6rem]">
          <div className="my-2">
            <h1 className="text-[18px] md:text-[18px] lg:text-[24px]  font-semibold ">
              Follow us on
            </h1>
          </div>
          <h1 className="text-center text-[14px] lg:text-[22px] font-semibold">
            @Realvedic
          </h1>
        </div>
      </section>
      <section className="">
        <div className="mx-2 lg:mx-[2rem] relative">
          <Carousel
            responsive={responsive}
            showDots={false}
            className="mx-[2rem] lg:mx-[5rem]"
            // removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            infinite={true}
            containerClass="carousel-container"
            autoPlaySpeed={2000}
            keyBoardControl={true}
            customTransition="all .5s"
            transitionDuration={500}
            customRightArrow={<CustomRight />}
            customLeftArrow={<CustomLeft />}
            renderButtonGroupOutside={true}
            arrows={true}

            // autoPlay={true}
          >
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1627485937980-221c88ac04f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1483&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1597362925123-77861d3fbac7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
            <div className="mr-2 lg:mr-[1.5rem]">
              <div className="bg-[#D9D9D9] w-full h-auto lg:w-[full] lg:h-auto flex items-center justify-center text-center bg-cover">
                <img
                  src="https://images.unsplash.com/photo-1522184216316-3c25379f9760?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt=""
                />
              </div>
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default FollowUs;
