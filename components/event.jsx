import { Col, Row } from "react-bootstrap";
import styles from "../styles/event.module.css";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactReveal from "react-reveal/Fade";

// Component: Event
// Used on home page for events that don't have images
//
// Props:
// - title: string
// - month: string **Which month the event happened**
// - summary: string
// - width: int **Column width**
// - displacement: int **Column displacement**
// - url: string **URL to event link**
// - linkText: string **Text to display for link**

const Event = ({
  title,
  month,
  summary,
  width,
  displacement,
  url,
  linkText,
}) => {
  return (
    <Row className="justify-content-md-center">
      {displacement > 0 ? (
        <>
          <Col lg={displacement} sm={0} />
        </>
      ) : (
        <></>
      )}
      <Col lg={width} sm={10}>
        <div className={styles.wrapper}>
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
            <h2 className={utilStyles.headingXl}>{title}</h2>
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
          ) : (
            <></>
          )}
        </div>
      </Col>
      {displacement < 0 ? (
        <>
          <Col lg={Math.abs(displacement)} sm={0} />
        </>
      ) : (
        <></>
      )}
    </Row>
  );
}

export default Event;