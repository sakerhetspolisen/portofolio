import Head from "next/head";
import Layout from "../components/layout";
import HeroBanner from "../components/homeBanner";
import YearBanner from "../components/yearBanner";
import Event from "../components/event";
import EventWithImages from "../components/eventWithImages";
import SnakeGame from "../components/snakeGame";
import { useState } from "react";

// Page: Home

const Home = () => {
  const [gameHasStarted, setGameHasStarted] = useState(false);

  return (
    <Layout home footerSpice>
      <Head>
        <title>Karl Sellergren : Leveling up your internet presence.</title>
        <meta name="description" content="I am a front-end developer based in Helsingborg,
              Sweden. I work with companies, agencies and individuals
              all over the world, creating beautiful things."></meta>
      </Head>
      <SnakeGame gameHasStartedState={setGameHasStarted} />
      <HeroBanner gameHasStarted={gameHasStarted} />
      <YearBanner year={200021}>
        <EventWithImages
          title="Founded my sole propriotorship"
          month="May"
          summary='Having developed websites for small projects a while it was a no-brainer for me to start a real business and connect with bigger clients. I freelance in web development and web consultation and have over 4 years of experience.'
          images={["youngLaundry.png", "sakerhetsKontrollen.png"]}
        />
        <Event
          title="Started working as a part-time Python teacher at Procivitas."
          summary="Giving me the ability to teach teens one year older than me how to code in my favourite general-purpose programming language."
          month="April"
          width="7"
          displacement="3"
        />
      </YearBanner>
      <YearBanner year={200020}>
        <Event
          title="Became board-member of Digital Ungdom."
          month="November"
          summary="Digital Ungdom is a non-profit youth association with the aim of developing and maintaining young people's interest in and knowledge of digital technology and computer science in Sweden and how this can be used."
          width="6"
          url="https://www.digitalungdom.se"
          linkText="Take a look at our website"
        />
        <Event
          title="Developed questionnaires at the Environment department of Helsingborg"
          month="June-July"
          summary="The Environmental Department of Helsingborg is one of the nations most successful in developing a sustainable city climate and goals, also participating in competitions against cities like Paris and Amsterdam. I was honored to develop a sample questionnaire intended to collect feedback from our citizens together with my colleague Katja."
          width="7"
          displacement="3"
        />
        <EventWithImages
          title="2nd place in Fixa Krisen"
          month="June"
          summary='I was the team lead of the project "Give a Bag, Get a Test", which won 2nd place in a nationwide competition hosted by the nonprofit Förebildarna. The project aims to restore the blood deficit caused by the COVID-19-crisis by offering a safe donation environment. In addition to being the team lead I developed the website prototypes and designs.'
          images={["gabgat.png", "gabgatQuestionnaire.png", "bloodDonations.png"]}
        />
        <Event
          title="6th place in Hack the Crisis"
          month="April"
          summary='"Give a Bag, Get a Test" also won 6th place in the nationwide, state-organized competition Hack The Crisis. Over 5000 participants took part in the competition, and our category had over 120 teams that competed against us. We landed at 6th place and were the only team containing solely of High school students in our category.'
          width="5"
          displacement="-4"
        />
      </YearBanner>
      <YearBanner year={200019}>
        <EventWithImages
          title="Co-founded Partikular"
          month="December"
          summary=" Partikular is Swedens biggest youth STEM magazine which focuses on creating and maintaining interest in Science, Technology, Engineering, and Mathematics. The association is run by a team of 30+ committed high school students, collaborating with organizations like Academedia and Naturvetarna. I founded the nonprofit with a couple of classmates, became Chairman of the board and developed all the digital systems (website, e-mail hooks, editorial review tools, etc.)."
          images={["partikular.png", "partikularCrew.jpg", "partikularComputer.jpg"]}
          linkText="Check out Partikular"
          url="https://www.partikular.se"
        />
      </YearBanner>
      <YearBanner year={200018}>
        <EventWithImages
          title="Started freelancing in frontend development"
          month="December"
          summary="I gained an understanding of HTML, CSS and Javascript and was able to softly start developing websites for various entities. This was a start for a long learning trip, where I managed to learn Wordpress, React, Apollo, Next.JS and more."
          images={["revenuir.png", "sccoStudio.png", "botAttack.png"]}
        />
        <Event
          title="Started at Procivitas"
          month="August"
          summary="I spent the whole year preparing for my studies at Procivitas high school STEM programme. During the first two years I gained an understanding of Classical and Modern Physics, Mathematics on a higher level, algorithm design and programming in Python."
          width="6"
          displacement="1"
        />
      </YearBanner>
      <YearBanner year={200017}>
        <EventWithImages
          title="Founded Återsälj"
          month="April"
          summary="In April I founded Återsälj, a Swedish marketplace optimized for high-end clothing, ensuring that sellers and buyers make secure deals. I developed the website using basic concepts and was later responsible for marketing. The project gained traction, getting over 1500 followers on Instagram."
          images={["atersaljPublish.png", "atersaljAd.png"]}
        />
      </YearBanner>
    </Layout>
  );
};

export default Home;
