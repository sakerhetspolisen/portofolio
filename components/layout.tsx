import Image from "next/image";
import styles from "../styles/layout.module.css";
import Link from "next/link";
import Footer from "./footer";
import "bootstrap/dist/css/bootstrap.min.css";

// Component: Layout
// This component structures the page. Contains the header and links to the main content.
//
// Props:
//  - children: array **The main content of the page**
// - home: boolean **Whether the page is the home page**
// - dark: boolean **Whether the header should be dark**
// - footerSpice: boolean **Whether the footer should change color**

type Props = {
  children?: React.ReactNode,
  home?: boolean,
  dark?: boolean,
  footerSpice?: boolean
};

const Layout = ({ children, home, dark, footerSpice }: Props) => {
  return (
    <div className={styles.container}>
      <header
        className={
          dark ? `${styles.header} ${styles.darkHeader}` : styles.header
        }
        id="page-header"
      >
        <div className={styles.headerLogo}>
          {home ? (
            <>
              <Image
                priority
                src="/images/logo.svg"
                className={styles.headerLogo}
                layout="fill"
                alt="Karl Sellergren"
              />
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logo.svg"
                    className={styles.headerLogo}
                    layout="fill"
                    alt="Karl Sellergren"
                  />
                </a>
              </Link>
            </>
          )}
        </div>
        <div className={`${styles.tag} hide-on-mobile`}>
          <span>Portfolio</span>
          <b>4</b>
          <span>2021</span>
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
      <Footer darkHeaderClass={styles.darkHeader} shouldHaveColor={footerSpice}></Footer>
    </div>
  );
};

export default Layout;
