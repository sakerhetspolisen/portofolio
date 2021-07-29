import { Col, Row } from "react-bootstrap";
import styles from "../styles//eventWithImages.module.css";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ReactReveal from "react-reveal/Fade";


// Component: EventWithImages
// Used on home page for events that have images
//
// Props:
// - title: string
// - month: string **Which month the event happened**
// - summary: string
// - images: array of strings **List with all the image urls**
// - linkText: string **Text to display for link**
// - url: string **URL to event link**

type Props = {
  title: string,
  month?: string,
  summary?: string,
  images?: Array<string>,
  linkText?: string,
  url?: string
};

const EventWithImages = ({title, month, summary, images, linkText, url}: Props) => {
  return (
    <Row className="justify-content-md-center" style={{ position: "relative" }}>
      <Col lg={6} sm={10}>
        <div className={styles.textWrapper}>
          <ReactReveal bottom cascade>
            <span
              style={{
                textTransform: "uppercase",
                fontSize: "0.8rem",
                margin: "10px 0",
                display: "block",
              }}
            >
              {month}
            </span>
          </ReactReveal>
          <ReactReveal>
            <h2 className={utilStyles.headingLg}>{title}</h2>
          </ReactReveal>
          <ReactReveal delay={800}>
            <p>{summary}</p>
          </ReactReveal>
          {url ? (
            <>
              <ReactReveal delay={1200} bottom>
                <a href={url} target="_blank" rel="noopener">
                  {linkText}
                  <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </ReactReveal>
            </>
          ) : null}
        </div>
      </Col>
      <Col lg={4} sm={0} />
      {images.map((fileName, index) => (
        <div className={styles.imageWrapper} key={index}>
          <Image
            src={"/images/" + fileName}
            alt="me"
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </Row>
  );
}

export default EventWithImages;