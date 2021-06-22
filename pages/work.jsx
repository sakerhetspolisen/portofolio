import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Col, Container, Row } from "react-bootstrap";
import ProjectsList from "../components/projectsList"

export default function Work() {
  return (
    <Layout>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
      <Container style={{marginTop: "10vw"}}>
        <Row>
          <Col md={6} style={{display:"flex",alignItems:"end"}}><h1 className={utilStyles.headingXl} style={{fontSize: "8vw",margin: 0}}>Past work</h1></Col>
          <Col md={6} style={{display:"flex",alignItems:"end"}}>
            <p style={{margin:"0 20px 30px 0"}}>Stöldskyddsföreningen / SCCO Studio / Revenuir / Bot-attack / Elevkåren vid Procivitas / Killergame / Partikular</p>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <p>2018-2021</p>
            <Link href="/">
              <a style={{color: "black",fontWeight:"bold"}}>&#128281; to home</a>
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <ProjectsList/>
      </Container>
    </Layout>
  );
}
