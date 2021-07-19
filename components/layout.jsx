import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import Footer from "./footer.jsx"
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({ children, home, dark }) {
  return (
    <div className={styles.container}>
      <header className={dark ? `${styles.header} ${styles.darkHeader}` : styles.header} id="page-header">
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
        <div className={`${styles.tag} hide-on-mobile`}>
          <span>Portfolio</span><b>4</b><span>2021</span>
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
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <Footer></Footer>
    </div>
  );
}
