import './Home.css'

import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className='home-page'>
      <motion.div

        id='home-landing'
        initial={{
          backgroundColor: 'black'
        }}
        animate={{
          backgroundColor:['black', 'rgb(33, 22, 41)']
        }}
        transition={{
          type: 'fade',
          duration: 2,
          when: 'beforeChildren',
          staggerChildren: 4
        }
        }>
        <motion.h1
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{}}
          transition={{
            type: 'slide',
            duration: 1
          }}
        >
          Weichen Tie
        </motion.h1>
        <motion.h2
          initial={{
            opacity: 0,
            x: -100,
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{}}
          transition={{
            type: 'slide',
            duration: 1
          }}
        >
          UNSW Undergraduate Student
        </motion.h2>
      </motion.div>
      <motion.div id='home-about-me'>
        <motion.h1
          initial={{
            opacity: 0,
            y: -100
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{}}>Weichen Tie</motion.h1>
        <motion.h2></motion.h2>
      </motion.div>
      <div className='container'>
      </div>
    </div>
  )
}


export default Home;