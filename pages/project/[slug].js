import { GraphQLClient, gql } from "graphql-request";
import Link from "next/link";
import Image from "next/image";
import ReactPlayer from "react-player";
import { AnimatePresence, motion } from "framer-motion";
import {NextSeo}  from "next-seo";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { useRef } from 'react';



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

// scroll to element
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)

export default function Project({ project}) {

  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  console.log(project);
const SEO = {
title: `Philip Charoen Kvam  | Project - ${project.title}  `,
description: project.description,
openGraph: {
  title: `Philip Charoen Kvam  | ${project.title}  `,
  description: project.description,
}
}
  return (
    <>
  <NextSeo {...SEO} />
      <motion.div variants={container}
     ref={myRef}
      >
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
            <h4 className="opacity-70 text-right md:text-2xl md:text-left xl:pl-96 ">
              Project information
            </h4>
            <div className="grid items-end"> {project.year}</div>
            <h2 className="xs:col-start-1 md:col-start-2 md:text-2xl">{project.title}</h2>
            <h3 className="font-regular  mb-20 xs:col-start-1 md:col-start-2 lg:text-6xl">
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
                    delay: 0.6,
                    ease: [0.6, 0.01, -0.05, 0.95],
                    duration: 1.2,
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
        <a
           onClick={executeScroll}
            className="block mx-auto h-full mt-20"
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
               <p className="text-center  md:text-lg lg:text-xl">
                {" "}
                Top
              </p>
              <Player
              className="rotate-180 "
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_ddfvanih.json"
                style={{ height: "70px", width: "70x", }}
              >
                <Controls
                  visible={false}
                  buttons={["play", "repeat", "frame", "debug"]}
                />
              </Player>
              
            </motion.div>
          </a>
      </motion.div>
    </>
  );
}


