import { Col, Row } from "react-bootstrap";
import styles from "../styles/projectsList.module.css";
import thumbnailUrl from "../public/images/partikular.png";
import ReactReveal from "react-reveal/Fade";
import ProjectCarousel from "./projectCarousel";

const ProjectsList = () => {
  let videoUrl = null;

  return (
    <>
      <Row className={styles.project}>
        <Col xl={6} md={6}>
          <div className={styles.upper}>
            <a href="https://www.google.se">
              <ReactReveal bottom>
                <h2>Killergame Procivitas</h2>
              </ReactReveal>
              <ReactReveal delay={500}>
                <p>Web developer</p>
              </ReactReveal>
            </a>
          </div>
          <div className={styles.lower}>
            <a href="https://www.google.se">
              <ReactReveal delay={500}>
                <p>Lorem ipsum dolor sit amet, et past mancum factum post.</p>
              </ReactReveal>
              <ReactReveal bottom cascade>
                <p className={styles.year}>2020</p>
              </ReactReveal>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <ProjectCarousel imagesAndVideosSrcList={[thumbnailUrl]}/>
        </Col>
      </Row>
      <div className={styles.waveHolder}>
        <div className={styles.waveWrapper}>
          <div className={styles.wave}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
        </div>
      </div>
    </>
  );
}

export default ProjectsList;