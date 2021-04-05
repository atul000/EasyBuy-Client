import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
//   Image,
//   ImageWithZoom,
//   Dot,
//   DotGroup,
// } from "pure-react-carousel";
// import "pure-react-carousel/dist/react-carousel.es.css";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const HomeCarousel = () => {
  return (
    <Carousel
      dynamicHeight={true}
      showStatus={false}
      showThumbs={false}
      showArrows={true}
      autoPlay
      infiniteLoop
    >
      <div>
        <img
          src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs0xAkCF2XWZUV-scJ-lpKeJH3Bs41nCYbaw&usqp=CAU`}
          alt="shoppy"
        />
      </div>
      <div>
        <img
          src={`https://cdn.pixabay.com/photo/2018/03/10/10/23/makeup-3213724__340.jpg`}
          alt="shoppy"
        />
      </div>
      <div>
        <img
          src={`https://cdn.pixabay.com/photo/2018/10/17/08/54/black-3753449__340.png`}
          alt="shoppy"
        />
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
