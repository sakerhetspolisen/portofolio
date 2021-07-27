import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/homeBanner.module.css";
import React, { useLayoutEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown } from "@fortawesome/free-solid-svg-icons";

// Component: HomeHero
// Shown behind the Snake-Game on home-page. Reacts on scroll.
//
// Props:
// - gameHasStarted: boolean **If the snake game has started**

const HomeHero = ({ gameHasStarted }) => {
  const [show, doShow] = useState({
    homeBanner: false,
  });
  const [percentShown, setPercentShow] = useState({
    homeBanner: 0,
  });
  useLayoutEffect(() => {
    const homeBanPos = window.innerHeight;
    const homeBanHeight = window.innerHeight;
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (homeBanPos < scrollPos) {
        // Element scrolled to
        doShow((state) => ({ ...state, homeBanner: true }));
        let homeBannerPercent =
          ((scrollPos - homeBanPos) * 100) / homeBanHeight;
        if (homeBannerPercent > 100) homeBannerPercent = 100;
        if (homeBannerPercent < 0) homeBannerPercent = 0;
        setPercentShow((prevState) => ({
          ...prevState,
          homeBanner: homeBannerPercent,
        }));
      } else if (homeBanPos > scrollPos) {
        // Element scrolled away (up)
        doShow((state) => ({ ...state, homeBanner: false }));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <Container className={styles.section}>
        <Row
          style={{
            position: "absolute",
            top: "calc(50% - 10px)",
            left: "calc(50% + 10px)",
            transform: "translate(-50%,-50%)",
            padding: "0",
            display: "block",
          }}
        >
          <Col>
            <h1 className={styles.heading} style={{ display: "inline" }}>
              <span
                style={{
                  transform: `translateX(${
                    percentShown.homeBanner
                      ? (percentShown.homeBanner / 100) * 200
                      : 0
                  }px)`,
                  opacity: gameHasStarted ? 0.5 : 1,
                  transition: "0.3s"
                }}
              >
                Hi! I'm a frontend
              </span>
              <span
                style={{
                  transform: `translateX(${
                    percentShown.homeBanner
                      ? -(percentShown.homeBanner / 100) * 60
                      : 0
                  }px)`,
                  opacity: gameHasStarted ? 0.5 : 1,
                  transition: "0.3s"
                }}
              >
                developer crafting
              </span>
              <span
                style={{
                  transform: `translateX(${
                    percentShown.homeBanner
                      ? (percentShown.homeBanner / 100) * 80
                      : 0
                  }px)`,
                  opacity: gameHasStarted ? 0.5 : 1,
                  transition: "0.3s"
                }}
              >
                digital products
              </span>
              <span
                style={{
                  transform: `translateX(${
                    percentShown.homeBanner
                      ? -(percentShown.homeBanner / 100) * 80
                      : 0
                  }px)`,
                  opacity: gameHasStarted ? 0.5 : 1,
                  transition: "0.3s"
                }}
              >
                since 2017.
              </span>
            </h1>
          </Col>
        </Row>
        <Row style={{
              position: "absolute",
              bottom: 27,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: 15,
            }}>
          <Col>
            <div>
              <span className={styles.scroller}><FontAwesomeIcon icon={faArrowCircleDown}/>Scroll down through my career</span>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeHero;
