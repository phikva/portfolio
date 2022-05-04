import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
    <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants= {{
      pageInitial: {
        opacity: 0,
        y:-300
      },
      pageAnimate: {
        opacity: 1,
        y:0,
        transition: {
          ease: [0.6, 0.01, -0.05, 0.95],
          duration: 1,
        },
      },
      pageExit: {
        opacity: 0,
        y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
      }
    }}
  >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
