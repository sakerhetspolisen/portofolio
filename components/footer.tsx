import { Col, Container, Row } from "react-bootstrap";
import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

// Component: Footer
// Used on all pages, reacts to scroll position
//
// Props:
// - darkHeaderClass: string **If the current page has a dark header, this class will be added to the header**
// - shouldHaveColor: boolean **If the background should change color**

type Props = {
  darkHeaderClass: string,
  shouldHaveColor?: boolean,
};

const Footer = ({ darkHeaderClass, shouldHaveColor }: Props) => {
  const footerRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const footerBottom: number = document.body.scrollHeight;
    let isDark: boolean = false;
    const onScroll = () => {
      const scrollPos: number = window.scrollY + window.innerHeight;
      if (scrollPos > footerBottom - 200) {
        // Footer scrolled to
        document.body.style.background = shouldHaveColor ? "#5433ff" : "#000d36";
        if (
          document
            .getElementById("page-header")
            .classList.contains(darkHeaderClass)
        ) {
          document
            .getElementById("page-header")
            .classList.remove(darkHeaderClass);
          isDark = true;
        }
      } else if (scrollPos < footerBottom - 200) {
        // Footer scrolled away (up)
        document.body.style.background = "#000d36";
        if (isDark) {
          document.getElementById("page-header").classList.add(darkHeaderClass);
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <footer>
        <Container
          ref={footerRef}
          style={{
            marginTop: "10vh",
            position: "relative",
          }}
        >
          <Row>
            <Col
              md={8}
              style={{
                display: "flex",
                alignItems: "center",
                height: "80vh",
              }}
            >
              <div style={{ position: "relative" }}>
                <h2
                  style={{
                    color: "white",
                    fontSize: 60,
                    marginLeft: "2vw",
                    lineHeight: "1",
                  }}
                >
                  Let's talk over{" "}
                  <span style={{ display: "inline-block", marginRight: 15 }}>
                    a
                  </span>
                  <span
                    style={{
                      display: "inline-block",
                      position: "relative",
                    }}
                  >
                    pizza.
                    <div
                      style={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        transform: "translate(50%,-50%)",
                      }}
                    >
                      <Image
                        src="/images/pixelpizza.png"
                        width="50"
                        height="50"
                        alt="Pixelated pizza"
                      />
                    </div>
                  </span>
                </h2>
                <p style={{ color: "white", marginLeft: "2vw" }}>
                  <b>Currently in:</b> Helsingborg, Sweden
                </p>
              </div>
            </Col>
            <Col
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{ marginRight: 30, marginLeft: "2vw", padding: "20px 0" }}
              >
                <h3 style={{ color: "white", fontSize: 22.5 }}>Get in touch</h3>
                <a
                  href="https://www.linkedin.com/in/karlsellergren"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white", display: "block", margin: "7px 0" }}
                >
                  Linkedin
                </a>
                <a
                  href="https://www.github.com/sakerhetspolisen"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white", display: "block", margin: "7px 0" }}
                >
                  Github
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01fb5d8636e09c5330"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white", display: "block", margin: "7px 0" }}
                >
                  Upwork
                </a>
                <a
                  href="mailto:karl@seller.green"
                  style={{ color: "white", display: "block", margin: "7px 0" }}
                >
                  karl@seller.green
                </a>
              </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-between", margin: "30px 0" }}>
            <Col md={"auto"}>
              <p
                style={{
                  color: "white",
                  fontSize: 15,
                  margin: 0,
                }}
              >
                Made with &#128150; by Karl Sellergren.{" "}
                <a
                  href="https://www.github.com/sakerhetspolisen/portofolio"
                  target="_blank"
                  rel="noopener"
                  style={{ color: "white", textDecoration: "underline" }}
                >
                  Source code
                </a>
              </p>
            </Col>
            <Col md={"auto"}>
              <p
                style={{
                  color: "white",
                  fontSize: 15,
                  margin: 0,
                }}
              >
                © {new Date().getFullYear()}
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
