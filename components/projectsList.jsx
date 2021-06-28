import { gql, useQuery } from "@apollo/client";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";
import styles from "../styles/projectsList.module.css";

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

  if (error) return <div>&#128559; Whoops! There was an error loading my projects.</div>;
  if (loading) return <div>&#128336; Loading...</div>;

  const { projects: allProjects } = data;

  return allProjects.map((project) => (
    <>
      <Row className={styles.project}>
        <Col md={6}>
          <div className={styles.upper}>
            <a href={project.referrerUrl}>
              <h2>{project.title}</h2>
              <p>{project.role}</p>
            </a>
          </div>
          <div className={styles.lower}>
            <a href={project.referrerUrl}>
              <p>{project.summary}</p>
              <p><b>{project.year}</b></p>
            </a>
          </div>
        </Col>
        <Col md={6}>
          <div className={styles.imageContainer}>
            <a href={project.referrerUrl}>
              <Image
                priority
                src={project.thumbnailUrl}
                layout="fill"
                objectFit="cover"
              />
            </a>
          </div>
        </Col>
      </Row>
      <div className={styles.wave}></div>
    </>
  ));
}
