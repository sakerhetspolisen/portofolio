import Head from "next/head";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { Col, Row } from "react-bootstrap";
import FullScreenBanner from "../components/fullScreenBanner";
import YearBanner from "../components/yearBanner";
import Event from "../components/event";
import EventWithImages from "../components/eventWithImages";
import SnakeGame from "../components/snakeGame";

// https://uigradients.com/#WeddingDayBlues

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Karl Sellergren</title>
      </Head>
      <SnakeGame/>
      <FullScreenBanner>
        <Row
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            margin: "0 40px",
            padding: "0",
            display: "block",
          }}
        >
          <Col>
            <h1 className={utilStyles.heading2Xl} style={{ display: "inline" }}>
              18-year old full-stack developer crafting digital products since
              2017.
            </h1>
            <p style={{margin: "15px 0"}}>Welcome to my portfolio! Feel free to scroll through my career below, or check out my projects.</p>
          </Col>
        </Row>
      </FullScreenBanner>
      <YearBanner year={2021}>
        <Event
          title="Started working as a programming teacher at Procivitas."
          month="April"
          width="7"
          displacement="3"
        />
        <Event title="Interviewed at Imperial College London." month="March" />
      </YearBanner>
      <YearBanner year={2020}>
        <Event
          title="Became board-member of Digital Ungdom."
          month="November"
          summary="Digital Ungdom is a non-profit youth association with the aim of developing and maintaining young people's interest in and knowledge of digital technology and computer science in Sweden and how this can be used."
          width="6"
          url="https://www.digitalungdom.se"
          linkText="Take a look at our website"
        />
        <Event
          title="Intern at the Environment Department of Helsingborg"
          month="June-July"
          summary="The Environmental Department strives for environmentally sustainable development. Helsingborgs citizens must have a good environment, both indoors and outdoors."
          width="7"
          displacement="3"
        />
        <Event
          title="2nd place in Fixa Krisen"
          month="June"
          summary='Our project "Give a Bag, Get a Test" won 2nd place in a nationwide competition hosted by the nonprofit Förebildarna. We won 10 000 SEK.'
          width="5"
          displacement="-4"
        />
        <EventWithImages
          title="6th place in Hack the Crisis"
          month="April"
          summary='I was the team-lead of the project "Give a Bag, Get a Test" which won 6th place in the nationwide, state-organized competition Hack The Crisis. Over 5000 participants took part in the competition, and our category had over 120 teams that competed against us. We landed at 6th place and were the only team containing solely of High school students in our category.'
          images={[]}
        />
      </YearBanner>
      <YearBanner year={2019}>
        <EventWithImages
          title="Co-founded Partikular"
          month="December"
          summary=" Partikular is Swedens biggest youth STEM magazine which focuses on creating and maintaining interest in research and facts related to Science, Technology, Engineering, and Mathematics. The association is run by a team of 30+ committed high school students, collaborating with organizations like Academedia and Naturvetarna. I founded the nonprofit with a couple of classmates and later became Chairman of the board. "
          images={[]}
          linkText="Check out Partikular"
          url="https://www.partikular.se"
        />
        <Event
          title="Volounteer work at the Red cross"
          month="June-July"
          summary=" The Red Cross is an international humanitarian movement that helps vulnerable people in society. I spent a summer volunteering in the second-hand shop in Helsingborg. I sorted out newly received gifts and helped other workers with cleaning and sorting. I was also a cash worker and store assistant during staffing."
          width="7"
          displacement="2"
        />
      </YearBanner>
      <YearBanner year={2018}>
        <EventWithImages
          title="Started freelancing in frontend development"
          month="December"
          summary="I spent the whole year preparing for my studies at Procivitas high school STEM programme. During the first two years I gained an understanding of Classical and Modern Physics, Mathematics on a higher level, algorithm design and programming in Python."
          images={["revenuir.png", "sccoStudio.png", "partikular.png"]}
        />
        <Event
          title="Started at Procivitas"
          month="August"
          summary="I spent the whole year preparing for my studies at Procivitas high school STEM programme. During the first two years I gained an understanding of Classical and Modern Physics, Mathematics on a higher level, algorithm design and programming in Python."
          width="6"
          displacement="1"
        />
      </YearBanner>
      <YearBanner year={2017}>
        <EventWithImages
          title="Founded Återsälj"
          month="April"
          summary="In April I founded Återsälj, a Swedish marketplace optimized for high-end clothing, ensuring that sellers and buyers make secure deals. I developed the website using basic concepts and was later responsible for marketing."
          images={["atersalj1.png", "atersalj2.png"]}
        />
      </YearBanner>
    </Layout>
  );
}
