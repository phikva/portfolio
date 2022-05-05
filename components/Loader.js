import { motion } from "framer-motion";
import { Player, Controls } from "@lottiefiles/react-lottie-player";

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
    y: 100,
  },
  show: {
    opacity: 1,
    y: 50,
    transition: {
      delay: 0.6,
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
const item2 = {
  hidden: {
    opacity: 0,
    y: 150,
  },
  show: {
    opacity: 1,
    y: 100,
    transition: {
      delay: 1,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -300,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};

const item3 = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 1,
    y: 150,
    transition: {
      delay: 1.5,
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    y: -500,
    transition: {
      ease: "easeInOut",
      duration: 1,
    },
  },
};
const item4 = {
    hidden: {
      opacity: 0,
      x: 250,
      y:50,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 200,
      transition: {
        delay: 2,
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
    exit: {
      opacity: 0,
      x: -500,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

const Loader = ({ setLoading }) => {
  return (
    <motion.div className="loader" >
      <motion.div
        variants={container}
        onAnimationComplete={() => setLoading(false)}
        initial="hidden"
        animate="show"
        exit="exit"
        className="loader-inner"
        
      >
  <Player
            className="xs:col-start-1"
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_kesqiuwx.json"
            style={{ height: "100px", width: "100x" }}
          >
            <Controls
              visible={false}
              buttons={["play", "repeat", "frame", "debug"]}
            />
          </Player>

        <motion.div
          variants={item}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          <span>Philip</span>
        </motion.div>
        <motion.div
          variants={item2}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
          <span>Charoen</span>
        </motion.div>
        <motion.div
          variants={item3}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 1.8,
          }}
        >
        
            <span>Kvam</span>
        
        </motion.div>
        <motion.div
          variants={item4}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "easeInOut",
            duration: 1,
            delay: 3,
          }}
        >
        
            <span>Hi</span>
        
        </motion.div>
       
      </motion.div>
    </motion.div>
  );
};

export default Loader;
