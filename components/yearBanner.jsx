import { Container, Row } from "react-bootstrap";
import styles from "../styles/yearBanner.module.css";
import React, { useLayoutEffect, useRef, useState } from "react";

// Component: YearBanner
// Used on home page for displaying banners for years.
//
// Props:
// - year: The year to display
// - children: The content to display under the year-text

const YearBanner = ({ year, children }) => {
  const [show, doShow] = useState({
    yearBanner: false,
  });
  const [percentShown, setPercentShow] = useState({
    yearBanner: 0,
  });
  const refThree = useRef(null);
  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const getHeight = (element) => element.offsetHeight;
    const yearTextPos = topPos(refThree.current);
    const yearTextHeight = getHeight(refThree.current);
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (yearTextPos < scrollPos) {
        // Element scrolled to
        doShow((state) => ({ ...state, yearBanner: true }));
        let yearBannerPercent =
          ((scrollPos - yearTextPos) * 100) / yearTextHeight;
        if (yearBannerPercent > 100) yearBannerPercent = 100;
        if (yearBannerPercent < 0) yearBannerPercent = 0;
        setPercentShow((prevState) => ({
          ...prevState,
          yearBanner: yearBannerPercent,
        }));
      } else if (yearTextPos > scrollPos) {
        // Element scrolled away (up)
        doShow((state) => ({ ...state, yearBanner: false }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Container id={year} className={styles.overflowContainer}>
        <Row
          className={styles.section}
          ref={refThree}
          style={{
            transform: `translateX(${
              percentShown.yearBanner
                ? (percentShown.yearBanner / 100) * 200 - 200
                : -200
            }px)`,
          }}
        >
          <span className={styles.year}>{year}</span>
        </Row>
        {children}
      </Container>
    </>
  );
};

export default YearBanner;
