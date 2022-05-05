import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
//variants
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
      <Head>
        <title>
          Philip Charoen Kvam {" "}
        </title>
        <meta name="description" content="Front end developer and UI designer based in
          Oslo. With a passion for creative and digital work" />
                <meta name="keywords" content="Front end development, UI design, projects, clients ,education" />
                <meta property="og:description" content="Front end developer and UI designer based in
          Oslo. With a passion for creative and digital work" />
      <meta property="image" content="" />
        <meta property="og:title" content="Philip kvam - front end developer - UI designer" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="robots" content="index,follow" />
        <meta property="og:description" content="Philip Charoen Kvam. Front end developer and UI designer based in
          Oslo. With a passion for creative and digital work." />
          <meta property="og:url" content="https://philipkvam.no" />
          <meta property="og:type" content="website" />
      </Head>

      <motion.div variants={container}>
        <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-3 mt-5 hero ">
          <h1 className="xs:col-start-1 md:col-span-3 max-w-7xl ">
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
              Front end developer and UI designer based in Oslo. With a passion
              for creative and digital work.
            </motion.div>
          </h1>

          <a href="#selected-work" className="h-full relative bottom-1/3">
            <motion.div
              initial="hidden"
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.8,
                  ease: [0.6, 0.01, -0.05, 0.95],
                  duration: 1.2,
                },
              }}
              variants={item}
            >
              <Player
                className="xs:col-start-1"
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_x7d5lmxs.json"
                style={{ height: "150px", width: "150x" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </motion.div>
          </a>
        </div>

        <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-3">
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
            <h3 id="selected-work">selected work</h3>
          </motion.div>
          {projects.map(({ id, title, slug, projectImage }) => (
            <div key={id} className="mb-5">
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
                <div className="">
                  <Link href={`/project/${slug}`} passHref={true}>
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
              </motion.div>
            </div>
          ))}
        </div>
        <div className="grid xs:grid-cols-1 mt-10 md:grid-cols-3">
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
            <h3>clients</h3>
          </motion.div>
          {clients.map(({ id, title }) => (
            <div key={id} className="mb-20">
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
                <h4>
                  {title}{" "}
                  <span className="opacity-70">
                    (Visual identity, UI/UX, Web dev)
                  </span>
                </h4>
              </motion.div>
            </div>
          ))}
          <motion.div
            className="xs:col-start-1"
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
            <h3>education</h3>
          </motion.div>
          {educations.map(({ id, title }) => (
            <div key={id} className="md:col-start-2 pb-1">
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
                <h4>{title}</h4>
              </motion.div>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
