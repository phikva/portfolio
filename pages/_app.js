import SEO from "../next-seo.config";
import { DefaultSeo } from "next-seo";
import Layout from "../components/Layout";
import "../styles/globals.css";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";




function MyApp({ Component, pageProps, router }) {
 

  return (
    <AnimateSharedLayout type="crossfade">
      <DefaultSeo {...SEO} />
      <AnimatePresence>
        <motion.div
        className="xs:m-5 md:mx-14 md:mt-14 lg:mx-32 lg:mt-32 xl:mx-36"
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
                duration: 0.8,
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
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
