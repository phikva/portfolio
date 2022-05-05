import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import { useEffect, useState } from "react";

import Loader from "../components/Loader";

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimateSharedLayout type="crossfade">
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
            y: -300,
          },
          pageAnimate: {
            opacity: 1,
            y: 0,
            transition: {
              ease: [0.6, 0.01, -0.05, 0.95],
              duration: 0.5,
            },
          },
          pageExit: {
            opacity: 0,
            y: -200,
            transition: {
              ease: "easeInOut",
              duration: 0.8,
            },
          },
        }}
      >
        {loading ? (
          <motion.div key="loader">
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            {!loading && (
              <motion.div
              
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 4 }}
              >
                <Layout>
                  <Component {...pageProps} />
                </Layout>
              </motion.div>
          
            )}
          </>
        )}
      </motion.div>
    </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
