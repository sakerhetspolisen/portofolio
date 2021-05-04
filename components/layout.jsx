import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerLogo}>
          {home ? (
            <>
              <Image
                priority
                src="/images/logo.png"
                className={styles.headerLogo}
                layout="fill"
              />
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logo.png"
                    className={styles.headerLogo}
                    layout="fill"
                  />
                </a>
              </Link>
            </>
          )}
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/work">
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <Container>
          <Row>
            <Col md={8}>
              <h4>Will code for pizza.</h4>
            </Col>
            <Col>
              <ul>
                <li>Wow</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}
