import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { motion } from "framer-motion";

const Tech = () => {
  // Function to animate icons with delays
  const animateIcons = () => {
    const iconElements = document.querySelectorAll('.animate-icon');
    iconElements.forEach((icon, index) => {
      setTimeout(() => {
        icon.classList.add('animate-icon');
      }, index * 200); // Adjust the delay (in milliseconds) as needed
    });
  };

  useEffect(() => {
    animateIcons();
  }, []);

  return (
    <>
    <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          In a rapidly evolving technological landscape<br />
          I adapt, learn, and creatively combine skills.
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Technologies & Tools
        </h2>
      </motion.div>
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology, index) => (
        <div
          className={`w-28 h-28 animate-icon delay-${index + 1}`}
          key={technology.name}
        >
          <img src={technology.icon} alt={technology.name} />
        </div>
      ))}
    </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
