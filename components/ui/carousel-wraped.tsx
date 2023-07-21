"use client";

import React, { ReactNode } from "react";
import { Carousel, CarouselProps } from "antd";

const defaultSettings: CarouselProps = {
  dots: true,
  dotPosition: "bottom",
  infinite: true,
  speed: 800,
  autoplay: true,
  draggable: true,
  adaptiveHeight: false,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const CarouselWraped = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative overflow-hidden">
      <Carousel {...defaultSettings} className="h-auto rounded-xl">
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselWraped;
