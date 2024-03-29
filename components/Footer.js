import { AnimatePresence, motion } from "framer-motion";
const itemHeading = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.6,
    },
  },
  exit: {
    opacity: 0,
    x: 400,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

export default function Footer() {
    return (
    <>
  
    
  
    <motion.div
            initial="hidden"
            whileInView={{
              opacity: 1,
             x: 0,
              transition: {
                delay: 0.3,
                ease: [0.6, 0.01, -0.05, 0.95],
                duration: 1.6,
              },
            }}
            variants={itemHeading}
          >
       <span className="block w-full h-px bg-white col-span-3 mt-40 mb-10"></span>     
    <footer className="grid xs:grid-cols-1 md:grid-cols-3">
    
      <div className="xs:col-start-1 col-start-2">
        <h4 className="opacity-70">say hello</h4>
      </div>
      <div className="xs:text-lg xs:pb-3 sm:text-xl">
        <a className="underline" href="mailto:philipkvam91@gmail.com">philipkvam91@gmail.com</a>
      </div>
      <div className="xs:text-lg sm:text-xl">
        <span className="xs:pr-2 md:pr-4">2022</span>
        <span> <a className=" underline xs:pr-2 md:pr-4" href="https://www.linkedin.com/in/philip-kvam-5b16601a3" target="_blank" rel="noreferrer" >LinkedIn</a></span>
        <span> <a className="underline xs:pr-2 md:pr-4" href="https://github.com/phikva?tab=repositories" target="_blank" rel="noreferrer" >Github</a></span>
        <span> <a className="underline xs:pr-2 md:pr-4" href="https://www.facebook.com/philip.kvam/" target="_blank" rel="noreferrer" >Facebook</a></span>
      </div>
  
    </footer>
    
    </motion.div>
    </>
    );
  }