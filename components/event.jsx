import { Col, Row } from "react-bootstrap";
import styles from "../styles/event.module.css";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Event({ title, month, summary, width, displacement, url, linkText }) {
  return (
    <Row className="justify-content-md-center">
      {displacement > 0 ? (
        <>
          <Col lg={displacement} sm={0} />
        </>
      ) : (<></>)}
      <Col lg={width} sm={10}>
        <div className={styles.wrapper}>
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
          <h3 className={utilStyles.headingXl}>{title}</h3>
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
