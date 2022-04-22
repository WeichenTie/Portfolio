import { motion } from "framer-motion";
import BackgroundCanvas from "../../../Components/BackgroundCanvas/BackgroundCanvas";

const mainVariants = {
  initial: {
    backgroundColor: "rgb(0, 0, 0)",
  },
  darkMode: {
    backgroundColor: "hsl(222,32%,10%)",
  },
};

const textVariants = {
  initial: {
    opacity: 0,
    y: -100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};

const bold1 = "Hi there,";
const infotext = "I'm Weichen Tie, aspiring fullstack and mechatronics engineer.";

const Landing = () => {
  return (
    <motion.div
      id="home-landing"
      variants={mainVariants}
      initial="initial"
      animate="darkMode"
      transition={{
        type: "fade",
        duration: 2,
        when: "beforeChildren",
        delayChildren: 0.3,
        staggerChildren: 4,
      }}
    >
      <BackgroundCanvas />
      <div className="container">
        {/* Drawing the Hello text */}
        <motion.h1
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{
            type: "slide",
            duration: 1,
          }}
        >
          {bold1}
        </motion.h1>

        {/* Drawing the sub text */}
        <motion.h2
          variants={textVariants}
          initial="initial"
          animate="animate"
          transition={{
            type: "slide",
            duration: 1,
          }}
        >
          {infotext}
        </motion.h2>
      </div>
    </motion.div>
  );
};

export default Landing;
