import { Col, Container, Row } from "react-bootstrap";
//import styles from "../styles/footer.module.css";
import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";

const Footer = () => {
  const footerRef = useRef(null);
  useLayoutEffect(() => {
    const footerBottom = document.body.scrollHeight;
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      if (scrollPos > footerBottom - 400) {
        // Footer scrolled to
        document.body.style.background = "#000d36";
      } else if (scrollPos < footerBottom - 400) {
        // Footer scrolled away (up)
        document.body.style.background = "#000d36";
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
            position: "relative"
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
                <h4
                  style={{
                    color: "white",
                    fontSize: 60,
                    marginLeft: 30,
                    lineHeight: "1"
                  }}
                >
                  Let's talk over <span style={{display: "inline-block",marginRight: 15}}>a</span>
                  <span style={{
                    display: "inline-block",
                    position: "relative"
                  }}>
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
                        priority
                        src="/images/pixelpizza.png"
                        width="50"
                        height="50"
                      />
                    </div>
                  </span>
                </h4>
                <p style={{color:"white",marginLeft:30}}><b>Currently in:</b> Helsingborg, Sweden</p>
              </div>
            </Col>
            <Col style={{
                display: "flex",
                alignItems: "center",
              }}>
            <div style={{ marginRight: 30, marginLeft: 25, padding: "20px 0" }}>
              <h5 style={{color:"white"}}>Get in touch</h5>
              <a href="https://www.linkedin.com/in/karlsellergren" style={{color:"white",display:"block",margin:"7px 0"}}>Linkedin</a>
              <a href="https://www.github.com/sakerhetspolisen" style={{color:"white",display:"block",margin:"7px 0"}}>Github</a>
              <a href="https://www.upwork.com/freelancers/~01fb5d8636e09c5330" style={{color:"white",display:"block",margin:"7px 0"}}>Upwork</a>
              <a href="mailto:karl@seller.green" style={{color:"white",display:"block",margin:"7px 0"}}>karl@seller.green</a>
            </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: "space-between", margin: "30px 10px" }}>
            <Col md={"auto"}>
              <p style={{
                color:"white",
                fontSize: 15,
                margin: 0
                }}>Made with &#128150; by Karl Sellergren. <a href="https://www.github.com/sakerhetspolisen" style={{color:"white",textDecoration: "underline",}}>Source code</a></p>
            </Col>
            <Col md={"auto"}>
              <p style={{
                color:"white",
                fontSize: 15,
                margin: 0
              }}>© {(new Date().getFullYear())}</p></Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
