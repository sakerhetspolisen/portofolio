import { gql, useQuery } from "@apollo/client";

export const ALL_PROJECTS_QUERY = gql`
  query allProjects {
    projects {
      title
      year
      referrerUrl
    }
  }
`;

export default function ProjectsList() {
  const { loading, error, data } = useQuery(ALL_PROJECTS_QUERY);

  if (error) return <div>Error loading projects.{error}</div>;
  if (loading) return <div>Loading</div>;

  const { projects: allProjects } = data;

  return allProjects.map((project) => (
    <div>
      <p>{project.title}</p>
      <p>{project.referrerUrl}</p>
    </div>
  ));
}
