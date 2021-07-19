import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/projectsList.module.css";
import thumbnailUrl from "../public/images/atersalj1.png";

export default function ProjectsList() {
  let videoUrl = null;

  return (
    <>
      <Row className={styles.project}>
        <Col md={6}>
          <div className={styles.upper}>
            <a href="https://www.google.se">
              <h2>Elevkåren vid Procivitas</h2>
              <p>Web developer</p>
            </a>
          </div>
          <div className={styles.lower}>
            <a href="https://www.google.se">
              <p>Lorem ipsum dolor sit amet, et past mancum factum post.</p>
              <p>
                <b>2020</b>
              </p>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.imageContainer}>
            <a href="https://www.google.se">
              {thumbnailUrl ? (
                <Image
                  priority
                  src={thumbnailUrl}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (<></>)}
              {videoUrl ? (
                <Image
                  priority
                  src={videoUrl}
                  layout="fill"
                  objectFit="cover"
                />
              ) : (<></>)}
            </a>
          </div>
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
