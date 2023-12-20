import { motion } from "framer-motion";
import { styles } from "../styles";
import { instagram, twitter, linkedin, github } from "../assets";
import resumePDF from "../assets/AdityaChavan-Resume.pdf";
import { useEffect, useState } from 'react';

const Hero = () => {
  const logos = [
    { src: instagram, alt: "instagram", link: "https://www.instagram.com/moodyadi/" },
    { src: linkedin, alt: "linkedin", link: "https://www.linkedin.com/in/adityachavan27/" },
    { src: twitter, alt: "twitter", link: "https://twitter.com/moodyadii" },
    { src: github, alt: "github", link: "https://github.com/moodyadi" },
  ];

  const handleLogoClick = (index) => {
    console.log(`Logo ${index + 1} clicked`);
  };

  const slideInAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const popOutAnimation = {
    whileTap: { scale: 1.2 },
    whileHover: { scale: [1, 1.2, 1], transition: { duration: 0.5, repeat: Infinity } },
  };

  const transitionOptions = {
    duration: 2.0,
    type: "spring",
  };

  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    const targetText = "Web Developer, DevOps & Cloud Enthusiast";

    const typeText = (index) => {
      setTypedText(targetText.substring(0, index));

      if (index <= targetText.length) {
        setTimeout(() => typeText(index + 1), 100);
      } else {
        setTimeout(() => typeText(0), 1000);
      }
    };

    typeText(0);
  }, []);

  return (
    <section className={`relative w-full mx-auto flex items-center justify-center ${styles.padding}`}>
      <div className={`max-w-7xl ${styles.paddingX} flex flex-col items-center gap-5`}>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInAnimation}
          className='flex flex-col justify-center items-center'
        >
          <span className='green-text-gradient' style={{ fontSize: '20px', marginBottom: '5px', textAlign: 'center' }}>
            Hello There, I'm
          </span>
          <h1 className={`${styles.heroHeadText} text-white`} style={{ marginBottom: '5px', textAlign: 'center' }}>
            <span className='blue-text-gradient'>Aditya Chavan</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInAnimation}
          className={`${styles.heroSubText} mt-2 text-white-50 text-sm text-center`}
        >
          {typedText}
        </motion.div>

        <div className='flex justify-around items-center'>
          {logos.map((logo, index) => (
            <motion.a
              key={index}
              href={logo.link}
              target="_blank"
              rel="noopener noreferrer"
              whileTap={popOutAnimation.whileTap}
              whileHover={popOutAnimation.whileHover}
              onClick={() => handleLogoClick(index)}
              style={{ margin: '5px' }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={transitionOptions}
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className='w-16 h-16 object-cover rounded-full'
              />
            </motion.a>
          ))}
        </div>

        {/* Download button for the resume */}
        <motion.a
          href={resumePDF}
          download="AdityaChavan-Resume.pdf"
          style={{ margin: '10px' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: [0, 1], y: [50, 0], transition: transitionOptions }}
          transition={transitionOptions}
          target="_blank"
          whileHover={popOutAnimation.whileHover}
        >
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Download Resume
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
