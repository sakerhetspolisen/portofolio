import { Col, Row } from "react-bootstrap";
import styles from "../styles//eventWithImages.module.css";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";

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

const EventWithImages = ({
  title,
  month,
  summary,
  images,
  linkText,
  url,
}) => {
  return (
    <Row className="justify-content-md-center" style={{ position: "relative" }}>
      <Col lg={6} sm={10}>
        <div className={styles.textWrapper}>
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
          <h3 className={utilStyles.headingLg}>{title}</h3>
          <p>{summary}</p>
          {url ? (
            <>
              <a href={url} target="_blank">
                {linkText}
                <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </>
          ) : (
            <></>
          )}
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