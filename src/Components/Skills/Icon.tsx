import { motion } from "framer-motion";
import "./Icon.css";

import CSharpIcon from "../../Assets/C-Sharp.svg";
import CSSIcon from "../../Assets/css-3.svg";
import HTMLIcon from "../../Assets/html.svg";
import JavaIcon from "../../Assets/java.svg";
import JSIcon from "../../Assets/js.svg";
import TSIcon from "../../Assets/typescript.svg";
import PythonIcon from "../../Assets/python.svg";
import ReactIcon from "../../Assets/react.svg";
import VueIcon from "../../Assets/Vue.svg";

const getIcon = (iconName: string) => {
  switch (iconName) {
    case "CSharpIcon":
      return (
        <motion.img className="skill-icon" src={CSharpIcon} alt={iconName} />
      );
    case "CSSIcon":
      return <motion.img className="skill-icon" src={CSSIcon} alt={iconName} />;
    case "HTMLIcon":
      return (
        <motion.img className="skill-icon" src={HTMLIcon} alt={iconName} />
      );
    case "JavaIcon":
      return (
        <motion.img className="skill-icon" src={JavaIcon} alt={iconName} />
      );
    case "JSIcon":
      return <motion.img className="skill-icon" src={JSIcon} alt={iconName} />;
    case "TSIcon":
      return <motion.img className="skill-icon" src={TSIcon} alt={iconName} />;
    case "PythonIcon":
      return (
        <motion.img className="skill-icon" src={PythonIcon} alt={iconName} />
      );
    case "ReactIcon":
      return (
        <motion.img className="skill-icon" src={ReactIcon} alt={iconName} />
      );
    case "VueIcon":
      return <motion.img className="skill-icon" src={VueIcon} alt={iconName} />;
  }
};

const IconVariants = {
  animate: {},
};

const Icon = ({ icon }) => {
  return (
    <motion.div
      className="skill-icon-container"
      variants={IconVariants}
      animate="animate"
    >
      {getIcon(icon + "Icon")}
    </motion.div>
  );
};

export default Icon;
