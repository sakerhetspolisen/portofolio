import Head from "next/head";
import Link from "next/link";
import React, { useRef, useEffect } from 'react'
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import styles from "../styles/work.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsList from "../components/sampleProject";

const Work = () => {
  const gradientRef = useRef(null);

  useEffect(() => {
    const canvas = gradientRef.current;
    const ctx = canvas.getContext("2d");

    function Pixel(x, y) {
      this.x = x;
      this.y = y;
      this.hue = Math.floor(Math.random() * 360);
      var direction = Math.random() > 0.5 ? -1 : 1;
      this.velocity = (Math.random() * 30 + 20) * 0.01 * direction;
    }
  
    Pixel.prototype.update = function () {
      this.hue += this.velocity;
    };
  
    Pixel.prototype.render = function (ctx) {
      var hue = Math.round(this.hue);
      ctx.fillStyle = "hsl(" + hue + ", 100%, 50% )";
      ctx.fillRect(this.x, this.y, 1, 1);
    };
  
    var pixels = [
      new Pixel(0, 0),
      new Pixel(1, 0),
      new Pixel(0, 1),
      new Pixel(1, 1),
    ];
  
    function animate() {
      pixels.forEach(function (pixel) {
        pixel.update();
        pixel.render(ctx);
      });
      requestAnimationFrame(animate);
    }
  
    animate();
  }, [gradientRef]);

  return (
    <Layout dark>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
      <Container className={styles.container}>
        <canvas width="2" height="2" ref={gradientRef}></canvas>
        <Row>
          <Col className={styles.overflower}>
            <span className={styles.shadows}>Latest Work</span>
            <span className={styles.shadows}>Latest Work</span>
            <span>L<b>a</b>te<b>s</b>t Wo<b>r</b>k</span>
          </Col>
        </Row>
      </Container>
      <Container style={{marginTop: 50, padding: 0}}>
        <ProjectsList />
      </Container>
    </Layout>
  );
}

export default Work