import { Col, Row } from "react-bootstrap";
import styles from "./event.module.css";

export default function Event({ title, month, summary }) {
  return (
        <Row>
            <Col>
                <div className={styles.wrapper}>
                    <span>{month}</span>
                    <h3>{title}</h3>
                    <p>{summary}</p>
                </div>
            </Col>
        </Row>
    );
}