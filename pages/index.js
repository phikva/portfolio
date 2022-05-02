import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";

const graphcms = new GraphQLClient(
  "https://api-eu-west-2.graphcms.com/v2/cl2j8qyb40er901z9fubd5876/master"
);

const QUERY = gql`
  {
    projects {
      id
      slug
      title
      projectImage {
        url
      }
    }
    clients {
      id
      title
    }
    educations {
      id
      title
    }
  }
`;

export async function getStaticProps() {
  const { projects, clients, educations } = await graphcms.request(QUERY);

  return {
    props: {
      projects,
      clients,
      educations,
    },
  };
}

export default function Home({ projects, clients, educations }) {
  return (
    <>
      <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-3 mt-5 mb-20">
        <h2 className="xs:col-start-1 md:col-start-2 relative lg:bottom-14">
          Front end developer and UI designer based in Oslo. With a passion for
          creative and digital work.
        </h2>
        
        {/* <div>
          <a href="mailto:philipkvam91@gmail.com">philipkvam91@gmail.com</a>
        </div> */}
      </div>

      <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-3">
        <h3>selected work</h3>

        {projects.map(({ id, title, slug, projectImage }) => (
          <div key={id} className="mb-20">
            <div className="">
              <Link href={`/project/${slug}`}>
                <Image
                  src={projectImage.url}
                  alt="project cover photo"
                  height={700}
                  width={1000}
                  objectFit="cover"
                />
              </Link>
            </div>

            <div>
              <h4>
                <Link href={`/project/${slug}`}>
                  <a>{title}</a>
                </Link>
              </h4>
            </div>
          </div>
        ))}
        
      </div>
      <div className="grid xs:grid-cols-1 md:grid-cols-3">
      <h3>clients</h3>
        {clients.map(({ id, title }) => (
          <div key={id} className="mb-20">
            <h4 >
              {title}{" "}
              <span className="opacity-70">(Visual identity, UI, Web dev)</span>
            </h4>
          </div>
        ))}

        <h3 className="xs:col-start-1">education</h3>
        {educations.map(({ id, title }) => (
          <div key={id} className="md:col-start-2">
            <h4>
             {title}
            </h4>
          </div>
        ))}
      </div>
    </>
  );
}
