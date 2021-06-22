import { gql, useQuery } from "@apollo/client";
import { Col, Row } from "react-bootstrap";
import Image from "next/image";

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

  if (error) return <div>Error loading projects.{error}</div>;
  if (loading) return <div>Loading</div>;

  const { projects: allProjects } = data;

  return allProjects.map((project) => (
    <Row>
      <Col md={6}>
        <div>
          <a href={project.referrerUrl}>
            <h2>{project.title}</h2>
          </a>
        </div>
        <div>
          <a href={project.referrerUrl}>
            <p>{project.summary}</p>
            <p>{project.role}</p>
            <p>{project.year}</p>
          </a>
        </div>
      </Col>
      <Col md={6}>
        <div>
          <a href={project.referrerUrl}>
            <Image
              priority
              src={project.thumbnailUrl}
              height="250"
              width="170"
            />
          </a>
        </div>
      </Col>
    </Row>
  ));
}
