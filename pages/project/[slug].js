import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.graphcms.com/v2/cl2j8qyb40er901z9fubd5876/master"
);

const QUERY = gql`
  query Project($slug: String!) {
    project(where: { slug: $slug }) {
      id
      slug
      title
      description
      year
      demoUrl
      projectType
      projectFiles {
        url
      }
      projectImage {
        url
      }
    }
  }
`;
export const sluglist = gql`
  {
    projects {
      slug
    }
  }
`;

export async function getStaticProps({ params }) {
  const slug = params.slug;
  const data = await graphcms.request(QUERY, { slug });

  const project = data.project;
  return {
    props: {
      project,
    },
  };
}
export async function getStaticPaths() {
  const { projects } = await graphcms.request(sluglist);

  return {
    paths: projects.map((project) => ({ params: { slug: project.slug } })),
    fallback: "blocking",
  };
}

export default function Project({ project }) {
  console.log(project);
  return (
    <>
      <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-2 mt-10">
        <h2 className="xs:col-start-1">{project.title}</h2>
        <h3 className="xs:col-start-1 md:col-start-2">{project.description}</h3>
        <div className="xs:col-start-1 md:col-start-2 mt-5 mb-20">
          <div> {project.year}</div>
          <div>
            {" "}
            <a
              className="xs:text-lg sm:text-2xl"
              href="https://www.matkreator.no"
              target="_blank"
              rel="_norefferer noreferrer"
            >
              {project.demoUrl}
            </a>
          </div>
          <h4 className="opacity-70">{project.projectType}</h4>
        </div>

      </div>
      <div className="xs:flex flex-col lg:grid grid-cols-2" >
        
      {project.projectFiles.map(({ id, url }) => (
         <div key={id}>
            <Image
                  src={url}
                  alt="project photo and files"
                  height={1000}
                  width={2000}
                  objectFit="cover"
                />
        </div>
        ))}
      </div>
    </>
  );
}
