import { Container } from "react-bootstrap";
import styles from "./fullScreenBanner.module.css";


export default function FullScreenBanner({ children }) {
  return (
        <Container className={styles.section}>{children}</Container>
    );
}