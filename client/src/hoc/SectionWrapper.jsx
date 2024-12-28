import { motion } from "motion/react"
import { styles } from "../styles";

const SectionWrapper = (Component , idName) =>
  function HOC() {
    return (
      <motion.section
      
      >
        <span>&nbsp;</span>
      </motion.section>
    );
  };


  export default SectionWrapper;