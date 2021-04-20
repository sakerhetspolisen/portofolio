import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
      <Container style={{marginTop: "10vw"}}>
        <Row>
          <Col><h1 className={utilStyles.headingLg}>Past work</h1></Col>
        </Row>
        <Row style={{margin: "0"}}>
          <Col md={6}>
            <p>2018-2021</p>
            <Link href="/">
              <a>Back to home</a>
            </Link>
          </Col>
          <Col md={6}>
            <p>SCCO Studio / Revenuir / Bot-attack / Elevkåren vid Procivitas / Killergame / Partikular</p>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
