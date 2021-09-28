// Third party
import Head from "next/head";
import { GetStaticProps } from 'next'
import React, { useRef, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { gql } from "@apollo/client";
import { initializeApollo, addApolloState } from '../lib/apolloClient'

// Custom
import Layout from "../components/layout";
import styles from "../styles/work.module.css";
import ProjectsList from "../components/projectsList";

export const ALL_PROJECTS_QUERY = gql`
  query allProjects {
    projects {
      title
      year
      summary
      role
      thumbnailUrl
      referrerUrl
      videoUrl
    }
  }
`;

// Page: Work

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
        <title>Work / Karl Sellergren</title>
        <meta name="keywords" content="front-end, frontend, front-end developer, frontend developer, work, helsingborg"/>
        <meta name="title" content="Work / Karl Sellergren"/>
        <meta name="description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
        <meta property="og:url" content="https://karlsellergren.se/work"/>
        <meta property="og:title" content="Work / Karl Sellergren"/>
        <meta property="og:description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
        <meta property="twitter:url" content="https://karlsellergren.se/work"/>
        <meta property="twitter:title" content="Work / Karl Sellergren"/>
        <meta property="twitter:description" content="My recent projects are made for agencies, magazines, schools and individuals. See a list of all my recent projects."/>
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
        <ProjectsList/>
      </Container>
    </Layout>
  );
};


export const getStaticProps: GetStaticProps = async (context) => {
  const apolloClient = initializeApollo()

  await apolloClient.query({
    query: ALL_PROJECTS_QUERY
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default Work;
