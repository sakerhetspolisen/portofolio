import Head from "next/head";
import Link from "next/link";
import utilStyles from "../styles/utils.module.css";
import Layout from "../components/layout";
import { Col, Row } from "react-bootstrap";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Work - Karl Sellergren</title>
      </Head>
    </Layout>
  );
}
