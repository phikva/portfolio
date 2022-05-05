import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
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

const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};
const item = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -400,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const image = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -400,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export default function Project({ project }) {
  console.log(project);

  return (
    <>
    <Head>
        <title>
        Philip Charoen Kvam - Project - {project.title} -
          {" "}
        </title>
        <meta name="description" content="Project"/>
        <meta property="og:title" content={ `${project.description} - Philip kvam  `} />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="robots" content="index,follow" />
        <meta property="og:description" content="Philip Charoen Kvam. Front end developer and UI designer based in
          Oslo. With a passion for creative and digital work." />
           <meta property="og:title" content="Philip Charoen Kvam" />
          <meta property="og:url" content="https://philipkvam.no" />
          <meta property="og:type" content="website" />
          <meta name="keywords" content={ `${project.description} `} />
      <meta property="image" content={ `${project.projectFiles[0].url} `}  />
      <meta property="og:description" content="Front end developer and UI designer based in
          Oslo. With a passion for creative and digital work"  />
      </Head>
      <motion.div variants={container}>
        <motion.div
          initial="hidden"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.6,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.2,
            },
          }}
          variants={item}
        >
          <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-2 mt-10">
            <h4 className="opacity-70 text-right md:text-2xl md:text-left lg:pl-96 ">
              Project information
            </h4>
            <div className="grid items-end"> {project.year}</div>
            <h2 className="xs:col-start-1 md:col-start-2 lg:text-3xl">{project.title}</h2>
            <h3 className="mb-20 xs:col-start-1 md:col-start-2 lg:text-6xl">
              {project.description}
            </h3>
            <h4 className="opacity-70 text-right md:text-2xl md:text-left xl:pl-96  ">
              Deliveries{" "}
            </h4>
            
            <a
              className="xs:col-start-1 md:col-start-2 xs:text-lg sm:text-2xl"
              href={` https://${project.demoUrl}`}
              passHref={true}
              target="_blank"
              rel="_norefferer noreferrer"
            >
              {project.demoUrl}
            </a>

            <h4 className="mb-10 opacity-70 xs:col-start-1 md:col-start-2">
              {project.projectType}
            </h4>
          </div>
        </motion.div>
        <div className="xs:grid grid gap-x-2 gap-y-0 flex-col lg:grid-cols-1">
          {project.projectFiles.map(({ id, url }) => (
            <div key={id}>
              <motion.div
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.3,
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 0.8,
                  },
                }}
                variants={image}
              >
                <Image
                  src={url}
                  alt="project photo and files"
                  height={1500}
                  width={2500}
                  objectFit="cover"
                  quality={100}
                  blurDataURL={url}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
