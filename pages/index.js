import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { AnimatePresence, motion } from "framer-motion";
import { useRef } from "react";

//variants
const container = {
  show: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const TopItem = {
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
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
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

// scroll to element
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

export default function Home({ projects, clients, educations }) {
  const myRef = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const executeScroll2 = () => scrollToRef(myRef2);
  const executeScroll3 = () => scrollToRef(myRef3);

  return (
    <>
      <span ref={myRef3}></span>
      <motion.div variants={container}>
        <div className="grid gap-2 xs:grid-cols-1 md:grid-cols-3 mt-5 hero ">
          <h1 className="xs:col-start-1 items-start md:col-span-3 max-w-7xl ">
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
              <span className="text-orange">Front end developer</span> and{" "}
              <span className="text-orange">UI designer</span> based in Oslo.
              With a passion for creative and digital work.
            </motion.div>
          </h1>

          <a
            onClick={executeScroll}
            className="xs:row-start-2 md:col-start-2 h-full"
          >
            <motion.div
              className="relative top-1/5"
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
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_ddfvanih.json"
                style={{ height: "150px", width: "150x" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              <p className="text-center  md:text-lg lg:text-xl">
                {" "}
                Some of the stuff I do
              </p>
            </motion.div>
          </a>
        </div>

        <div ref={myRef} className="h-screen grid  md:grid-cols-3">
          <motion.div
            initial="hidden"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
              },
            }}
            variants={TopItem}
            className="font-Neue-bold font-bold text-2xl sm:text-3xl md:text-5xl xl:text-7xl self-center md:col-span-2"
          >
            Develop interactive, scalable and dynamic solutions, with experience
            in frameworks and content managment systems such as
            <div className=" mt-10 text-orange">
              React.js, Next.js, Sanity.io, and GraphCMS.
            </div>
          </motion.div>
          <a
            onClick={executeScroll2}
            className="xs:row-start-2 md:col-start-2 h-full "
          >
            <motion.div
              className="relative top-1/5"
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
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_ddfvanih.json"
                style={{ height: "150px", width: "150x" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              <p className="text-center  md:text-lg lg:text-xl">
                {" "}
                More stuff I do
              </p>
            </motion.div>
          </a>
        </div>

        <div
          ref={myRef2}
          className="custom-height flex items-center md:grid grid-cols-2"
        >
          <motion.div
            initial="hidden"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
              },
            }}
            variants={TopItem}
            className="font-Neue-bold font-bold text-2xl sm:text-3xl md:text-5xl xl:text-7xl md:col-start-2"
          >
            Design consistent, user-friendly, and intuitive interfaces with
            <span className="text-orange pl-2">Figma and Adobe XD.</span>
          </motion.div>
        </div>
        <h3 className="mb-2">selected work</h3>
        <motion.div
          className="grid gap-2 xs:grid-cols-1 md:grid-cols-1"
          initial="hidden"
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              delay: 0.3,
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 1.6,
            },
          }}
          variants={item}
        >
          {projects.map(({ id, title, slug, projectImage }) => (
            <div key={id} className="xs:mb-10 lg:mb-32">
              <motion.div
                initial="hidden"
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    delay: 0.2,
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
                  },
                }}
                variants={item}
              >
                <div className="hover:cursor-pointer">
                  <Link href={`/project/${slug}`} passHref={true}>
                    <Image
                    className="transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110  duration-300"
                      src={projectImage.url}
                      alt="project cover photo"
                      height={1500}
                      width={2500}
                      objectFit="cover"
                    />
                  </Link>
                </div>

                <div className="mt-2 lg:mt-6 ">
                  <h4 className="xl:text-5xl ">
                    <Link href={`/project/${slug}`}>
                      <a>{title}</a>
                    </Link>
                    <a
                      href={`/project/${slug}`}
                      className="ml-5 xs:py-1 px-4 rounded-full border-2 transition ease-in-out delay-150 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-orange duration-300"
                    >
                      View
                    </a>
                  </h4>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>
        <div className="grid xs:grid-cols-1 mt-20 md:grid-cols-3">
          <h3 className="">clients</h3>
          <motion.div
            className="md:col-start-2"
            initial="hidden"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
              },
            }}
            variants={item}
          >
            {clients.map(({ id, title }) => (
              <div key={id} className="mb-20">
                <h4>
                  {title}{" "}
                  <span className="opacity-70">
                    (Visual identity, UI/UX, Web dev)
                  </span>
                </h4>
              </div>
            ))}
          </motion.div>
          <h3 className="md:col-start-1 ">education</h3>
          <motion.div
            className="md:col-start-2"
            initial="hidden"
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                delay: 0.3,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
              },
            }}
            variants={item}
          >
            {educations.map(({ id, title }) => (
              <div key={id} className="md:col-start-3 pb-1">
                <h4>{title}</h4>
              </div>
            ))}
          </motion.div>
        </div>
        <div className="w-full flex mt-20">
          {/* <span className="h-fit w-fit mx-auto rounded-full border-2 xs:py-2 xs:px-4 md:col-start-3">Top</span> */}

          <a onClick={executeScroll3} className="mx-auto h-full">
            <motion.div
              className="relative top-1/5"
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
              <p className="text-center  md:text-lg lg:text-xl"> Top</p>
              <Player
                className="rotate-180 "
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_ddfvanih.json"
                style={{ height: "70px", width: "70x" }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
            </motion.div>
          </a>
        </div>
      </motion.div>
    </>
  );
}
