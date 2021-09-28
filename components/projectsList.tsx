// Third party
import { gql, useQuery } from "@apollo/client";
import { Container, Col, Row } from "react-bootstrap";
import ReactReveal from "react-reveal/Fade";

// Custom
import styles from "./projectsList.module.css";
import ProjectCarousel from "./projectCarousel";

// Component: ProjectsList
// The list component used on the 'Work' page to display all projects. Uses react-reveal to reveal text with cool animations.

export const ALL_PROJECTS_QUERY = gql`
  query allProjects {
    projects {
      title
      year
      summary
      role
      thumbnailUrl
      referrerUrl
      videoUrl
    }
  }
`;

export default function ProjectsList() {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (error)
    return <div><p style={{textAlign: "center"}}>&#128559; Whoops! There was an error loading my projects.</p></div>;
  if (loading) return <div><p style={{textAlign: "center"}}>&#128336; Please wait as I'm loading the recent projects...</p></div>;

  const { projects: allProjects } = data;
  var proj = JSON.parse( JSON.stringify( allProjects ) );
  var ordered = proj.sort(function(a, b){
    return b.year - a.year;
  })
  return ordered.map((project) => (
    <Container key={project.title.toLowerCase().replace(" ","-")}>
      <Row className={styles.project}>
        <Col xl={6} md={6}>
          <div className={styles.upper}>
            <a href={project.referrerUrl}>
              <ReactReveal bottom>
                <h2>{project.title}</h2>
              </ReactReveal>
              <ReactReveal delay={500}>
                <p>{project.role}</p>
              </ReactReveal>
            </a>
          </div>
          <div className={styles.lower}>
            <a href={project.referrerUrl}>
              <ReactReveal delay={500}>
                <p>{project.summary}</p>
              </ReactReveal>
              <ReactReveal bottom cascade>
                <p className={styles.year}>{project.year}</p>
              </ReactReveal>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.carouselContainer}>
            <ProjectCarousel
              imagesAndVideosSrcList={[project.thumbnailUrl]}
              imageClass={styles.carouselImages}
            />
          </div>
        </Col>
      </Row>
      <div className={styles.waveHolder}>
        <div className={styles.waveWrapper}>
          <div className={styles.wave}></div>
          <div className={`${styles.wave} ${styles.wave2}`}></div>
        </div>
      </div>
    </Container>
  ));
}
