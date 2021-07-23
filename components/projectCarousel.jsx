import React, { Component } from "react";
import ReactDOM from "react-dom";
import Image from "next/image";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from "react-responsive-carousel";

const AssetCarousel = ({ imagesAndVideosSrcList, imageClass }) => {
  return (
    <Carousel autoPlay showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
      {
        imagesAndVideosSrcList.map((src,i) => {
          return(
            <div className={imageClass} key={i}>
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

export default AssetCarousel;