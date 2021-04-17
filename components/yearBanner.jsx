import { Container, Row } from "react-bootstrap";
import styles from "./yearBanner.module.css";

export default function FullScreenBanner({ year, children }) {
  return (
        <Container id={year}>
            <Row className={styles.section}>
                <span className={styles.year}>{year}</span>
            </Row>
            {children}
        </Container>
    );
}