import React, { Component } from "react";
import Image from "next/image";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Component: AssetCarousel
// A Carousel for displaying all images (soon videos) in a project. Uses the react-responsive-carousel library.
//
// Props:
// - imagesAndVideosSrcList: Array of image and video urls.
// - imageClass: CSS class for the image container.

const AssetCarousel = ({ imagesAndVideosSrcList, imageClass }) => {
  return (
    <Carousel
      autoPlay
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      infiniteLoop
    >
      {imagesAndVideosSrcList.map((src, i) => {
        return (
          <div className={imageClass} key={i}>
            <Image src={src} layout="fill" objectFit="cover" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default AssetCarousel;
