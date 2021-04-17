import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Col, Row } from "react-bootstrap";
import FullScreenBanner from "../components/fullScreenBanner";
import YearBanner from "../components/yearBanner";
import Event from "../components/event";
import EventWithImages from "../components/eventWithImages";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Karl Sellergren</title>
      </Head>
      <FullScreenBanner>
        <Row
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            margin: "0 15px",
            padding: "0",
            display: "block",
          }}
        >
          <Col sm={12} md={11} lg={10} xl={10}>
            <h1 className={utilStyles.heading2Xl} style={{ display: "inline" }}>
              18-year old full-stack developer crafting digital products since
              2018.
            </h1>
            <a
              href="#2018"
              style={{
                padding: "15px",
              }}
            >
              Check out my career
              <FontAwesomeIcon icon={faArrowDown} />
            </a>
          </Col>
        </Row>
      </FullScreenBanner>
      <YearBanner year={2021}>
      <Event
          title="Started working as a programming teacher at Procivitas"
          month="April"
        />
      <Event
          title="Interviewed at Imperial College London"
          month="March"
        />
      </YearBanner>
      <YearBanner year={2020}>
        <Event
          title="Became board-member of Digital Ungdom"
          month="November"
          summary="Digital Ungdom is a non-profit youth association with the aim of developing and maintaining young people's interest in and knowledge of digital technology and computer science in Sweden and how this can be used."
        />
        <Event
          title="Intern at the Environment Department of Helsingborg"
          month="June-July"
          summary="The Environmental Department strives for environmentally sustainable development. Helsingborgs citizens must have a good environment, both indoors and outdoors."
        />
        <Event
          title="2nd place in Fixa Krisen"
          month="June"
          summary='Our project "Give a Bag, Get a Test" won 2nd place in a nationwide competition hosted by the nonprofit Förebildarna. We won 10 000 SEK.'
        />
        <Event
          title="6th place in Hack the Crisis"
          month="April"
          summary='I was the team-lead of the project "Give a Bag, Get a Test" which won 6th place in the nationwide, state-organized competition Hack The Crisis. Over 5000 participants took part in the competition, and our category had over 120 teams that competed against us. We landed at 6th place and were the only team containing solely of High school students in our category.'
        />
      </YearBanner>
      <YearBanner year={2019}>
        <Event
          title="Co-founded Partikular"
          month="December"
          summary=" Partikular is Swedens biggest youth STEM magazine which focuses on creating and maintaining interest in research and facts related to Science, Technology, Engineering, and Mathematics. The association is run by a team of 30+ committed high school students, collaborating with organizations like Academedia and Naturvetarna. I founded the nonprofit with a couple of classmates and later became Chairman of the board. "
        />
        <Event
          title="Volounteer work at the Red cross"
          month="June-July"
          summary=" The Red Cross is an international humanitarian movement that helps vulnerable people in society. I spent a summer volunteering in the second-hand shop in Helsingborg. I sorted out newly received gifts and helped other workers with cleaning and sorting. I was also a cash worker and store assistant during staffing."
        />
      </YearBanner>
      <YearBanner year={2018}>
        <Event
          title="Started freelancing in frontend development"
          month="December"
          summary="I spent the whole year preparing for my studies at Procivitas high school STEM programme. During the first two years I gained an understanding of Classical and Modern Physics, Mathematics on a higher level, algorithm design and programming in Python."
        />
        <Event
          title="Started at Procivitas"
          month="August"
          summary="I spent the whole year preparing for my studies at Procivitas high school STEM programme. During the first two years I gained an understanding of Classical and Modern Physics, Mathematics on a higher level, algorithm design and programming in Python."
        />
      </YearBanner>
      <YearBanner year={2017}>
        <EventWithImages
          title="Återsälj"
          month="April"
          summary="In April I founded Återsälj, a Swedish marketplace optimized for high-end clothing, ensuring that sellers and buyers make secure deals. I developed the website using basic concepts and was later responsible for marketing."
          imageOne="/images/atersalj1.png"
          imageTwo="/images/atersalj2.png"
        />
      </YearBanner>
    </Layout>
  );
}
