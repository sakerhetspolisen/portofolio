import Head from "next/head";
import Layout from "../components/layout";
import HeroBanner from "../components/homeBanner";
import YearBanner from "../components/yearBanner";
import Event from "../components/event";
import EventWithImages from "../components/eventWithImages";
import SnakeGame from "../components/snakeGame";

// Page: Home

const Home = () => {
  return (
    <Layout home>
      <Head>
        <title>Karl Sellergren. : Frontend developer with class.</title>
        <meta name="description" content="I am a front-end developer based in Helsingborg,
              Sweden. I work with companies, agencies and individuals
              all over the world, creating beautiful things."></meta>
      </Head>
      <SnakeGame />
      <HeroBanner />
      <YearBanner year={200021}>
        <EventWithImages
          title="Founded my sole propriotorship"
          month="May"
          summary='Having developed websites for small projects a while it was a no-brainer for me to start a real business and connect with bigger clients. I freelance in web development and web consultation and have over 4 years of experience.'
          images={[]}
        />
        <Event
          title="Started working as a Python teacher at Procivitas."
          month="April"
          width="7"
          displacement="3"
        />
        <Event title="Interviewed at Imperial College London for Information Engineering." month="March" />
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
      <YearBanner year={200019}>
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
      <YearBanner year={200018}>
        <EventWithImages
          title="Started freelancing in frontend development"
          month="December"
          summary="I gained an understanding of HTML, CSS and Javascript and was able to softly start developing websites for various entities. This was a start for a long learning trip, where I managed to learn Wordpress, React, Apollo, Next.JS and more."
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
      <YearBanner year={200017}>
        <EventWithImages
          title="Founded Återsälj"
          month="April"
          summary="In April I founded Återsälj, a Swedish marketplace optimized for high-end clothing, ensuring that sellers and buyers make secure deals. I developed the website using basic concepts and was later responsible for marketing."
          images={["atersalj1.png", "atersalj2.png"]}
        />
      </YearBanner>
    </Layout>
  );
};

export default Home;
