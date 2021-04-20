import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Col, Row } from "react-bootstrap";
import FullScreenBanner from "../components/fullScreenBanner";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
      <FullScreenBanner>
        <Row
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            padding: "0",
            display: "block",
            width: "100%",
          }}
        >
          <Col>
            <h1 className={utilStyles.heading2Xl} style={{ textAlign: "center" }}>
              Contact me
            </h1>
            <Link href="/">
          <a>Back to home</a>
        </Link>
          </Col>
        </Row>
      </FullScreenBanner>
    </Layout>
  );
}
