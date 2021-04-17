import { Col, Row } from "react-bootstrap";
import styles from "./eventWithImages.module.css";
import Image from "next/image";

export default function Event({
  title,
  month,
  summary,
  imageOne,
  imageTwo,
  imageThree,
}) {
  return (
    <Row>
      <Col>
        <div className={styles.wrapper}>
          <span>{month}</span>
          <h3>{title}</h3>
          <p>{summary}</p>
        </div>
        <Image src={imageOne} alt="me" width="200" height="200" />
        <Image src={imageTwo} alt="me" width="200" height="200" />
      </Col>
    </Row>
  );
}
