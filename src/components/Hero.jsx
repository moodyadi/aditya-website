import { motion } from "framer-motion";

import { styles } from "../styles";
//import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (

    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
        <span className='green-text-gradient' style={{ fontSize: '20px', marginRight: '5px' }}>
              Hello There, I'm
        </span>{' '}
          <h1 className={`${styles.heroHeadText} text-white`} style={{ marginBottom: '5px' }}>
            <span className='blue-text-gradient'>Aditya</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-50 text-sm`}>
            Web Developer, DevOps & Cloud Enthusiast<br className='hidden sm:inline' />
            <br className='hidden sm:inline' />
          </p>
        </div>
      </div>


    </section>
  );
};

export default Hero;