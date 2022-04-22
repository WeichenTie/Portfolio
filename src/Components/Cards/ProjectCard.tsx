import "./ProjectCard.css";
import { motion } from "framer-motion";

import Placeholder from "../../Assets/placeholder2.jpg";




const cardAnimationVariation = {
    initial: { opacity: 0, y: 100 },
    onPage: { opacity: 1, y: 0}

}




const ProjectCard = () => {
  return (
    <motion.div
      className="project-card"
      initial='initial'
      whileInView='onPage'
      variants={cardAnimationVariation}
      viewport={{ once: true }}
      transition={{
          duration: 1
      }}
    >
      <motion.img className="project-img" src={Placeholder}></motion.img>
      <motion.div className="project-card-details">
        <h1>Homemade GPU</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          quod consequuntur impedit odio eveniet sed natus hic, quos ex incidunt
          eos amet veritatis saepe magnam exercitationem rem eum quidem qui.
        </p>
        <motion.div>
            
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
