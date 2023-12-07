import { motion } from "framer-motion";
import { styles } from "../styles";
import { instagram, twitter, linkedin, github } from "../assets";

const Hero = () => {
  const logos = [
    { src: instagram, alt: "instagram", link: "https://www.instagram.com/moodyadi/" },
    { src: linkedin, alt: "linkedin", link: "https://www.linkedin.com/in/adityachavan27/" },
    { src: twitter, alt: "twitter", link: "https://twitter.com/moodyadii" },
    { src: github, alt: "github", link: "https://github.com/moodyadi" },
  ];

  const handleLogoClick = (index) => {
    // Handle click event, e.g., change colors
    console.log(`Logo ${index + 1} clicked`);
  };

  const slideInAnimation = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  const popOutAnimation = {
    whileTap: { scale: 1.2 },
    whileHover: { scale: 1.2 },
  };

  const transitionOptions = {
    duration: 2.0, // Adjust the duration to slow down or speed up the animation
    type: "spring", // You can use other easing functions like "easeInOut"
  };

  return (
    <section className={`relative w-full h-screen mx-auto flex items-center justify-center`}>
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
        
        <motion.p
          initial="hidden"
          animate="visible"
          variants={slideInAnimation}
          className={`${styles.heroSubText} mt-2 text-white-50 text-sm text-center`}
        >
          Web Developer, DevOps & Cloud Enthusiast<br className='hidden sm:inline' />
          <br className='hidden sm:inline' />
        </motion.p>

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
      </div>
    </section>
  );
};

export default Hero;
