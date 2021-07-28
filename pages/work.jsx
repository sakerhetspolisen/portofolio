import Head from "next/head";
import React, { useRef, useEffect } from "react";
import Layout from "../components/layout";
import styles from "../styles/work.module.css";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsList from "../components/projectsList";
import socialImage from "../public/images/social.png";


// Page: Work

const Work = () => {
  const gradientRef = useRef(null);

  const structuredDataPerson = {
    "@context": "https://schema.org/",
    "@type": "Person",
    "name": "Karl Sellergren",
    "url": "https://seller.green/work",
    "image": "https://seller.green" + socialImage,
    "sameAs": [
      "https://www.linkedin.com/in/karlsellergren",
      "https://www.github.com/sakerhetspolisen",
      "https://seller.green"
    ],
    "jobTitle": "Freelancing web developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Sellergren"
    }  
  }

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
        <title>Work / Karl Sellergren</title>
        <meta name="keywords" content="front-end, frontend, front-end developer, frontend developer, work, helsingborg"/>
        <meta name="title" content="Work / Karl Sellergren"/>
        <meta name="description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://seller.green/"/>
        <meta property="og:title" content="Work / Karl Sellergren"/>
        <meta property="og:description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
        <meta property="og:image" content={'https://seller.green' + socialImage}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://seller.green/"/>
        <meta property="twitter:title" content="Work / Karl Sellergren"/>
        <meta property="twitter:description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
        <meta property="twitter:image" content={'https://seller.green' + socialImage}/>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataPerson) }}
        />
      </Head>
      <Container className={styles.container}>
        <canvas width="2" height="2" ref={gradientRef}></canvas>
        <Row>
          <Col className={styles.overflower}>
            <h1 className={styles.shadows}>Latest Work</h1>
            <span className={styles.shadows}>Latest Work</span>
            <span>
              L<b>a</b>te<b>s</b>t Wo<b>r</b>k
            </span>
          </Col>
        </Row>
      </Container>
      <Container style={{ marginTop: 50, padding: 0 }}>
        <ProjectsList />
      </Container>
    </Layout>
  );
};

export default Work;
