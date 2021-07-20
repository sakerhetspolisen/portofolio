import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";

const DemoCarousel = ({ imagesAndVideosSrcList }) => {
  return (
    <Carousel autoPlay showArrows={false} showThumbs={false} showIndicators={false} showStatus={false} infiniteLoop>
      {
        imagesAndVideosSrcList.map((src) => {
          return(
            <div style={{
              height: "60vh",
              minHeight: 400,
              width: "calc(100% - 60px)",
              marginRight: 60,
              position: "relative"
            }}>
              <Image
                src={src}
                layout="fill"
                objectFit="cover"
              />
            </div>
          )
        })
      }
    </Carousel>
  );
};

export default DemoCarousel;