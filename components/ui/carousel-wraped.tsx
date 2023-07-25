"use client";

import React, { ReactNode, useRef, useState } from "react";
import { Carousel, CarouselProps } from "antd";
import useCarousel from "@/hooks/use-carousel";

const defaultSettings: CarouselProps = {
  dots: true,
  dotPosition: "bottom",
  infinite: true,
  speed: 800,
  rows: 1,
  draggable: true,
  onSwipe(swipeDirection) {
    console.log(swipeDirection, 'swopedirection');
  },
  swipeToSlide: true,
  adaptiveHeight: false,
  slidesToScroll: 1,
  pauseOnHover: false
};

interface CarouselWrapedProps {
  children: ReactNode,
  slidesToShow?: number
}

const CarouselWraped = ({ children, slidesToShow = 1 }: CarouselWrapedProps) => {
  const carouselRef = useRef(null);

  const setIsSwiping = useCarousel((state) => state.setIsSwiping)
  
  const handleSwipeStart = () => {
    setIsSwiping(true);
    console.log('swip start');
    
  };

  const handleSwipeEnd = () => {
    setIsSwiping(false);
    console.log('swip end');
  };


  return (
    <div className="relative overflow-hidden">
      <Carousel 
        ref={carouselRef}
        {...defaultSettings} 
        slidesToShow={slidesToShow} 
        className="h-auto rounded-xl" 
        beforeChange={handleSwipeStart}
        afterChange={handleSwipeEnd}
      >
        {children}
      </Carousel>
    </div>
  );
};

export default CarouselWraped;
