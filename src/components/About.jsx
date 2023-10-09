import React from "react";
import { Tilt } from "react-tilt";

import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const defaultTiltOptions = {
    speed: 1000,
    transition: true,
    easing: "cubic-bezier(.03,.98,.52,.99)", 
}

const ServiceCard = ({ index, title, icon }) => (
    <Tilt options={defaultTiltOptions} className='xs:w-[250px] w-full m-auto'>
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-cyan-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='green-cyan-gradient rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img
            src={icon}
            alt='web-development'
            className='w-16 h-16 object-contain'
          />
  
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
  
  const About = () => {
    return (
      <>
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} text-right`}>Introduction</p>
          <h2 className={`${styles.sectionHeadText} text-right`}>Overview.</h2>
        </motion.div>
  
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='w-full mt-4 text-secondary text-[17px]  leading-[30px] text-right'
        >
              I'm a skilled software developer and hacker with experience in 
              many languages and expertise in framworks like React, Node.js and more.
              I'm a quick learner and collaborate closely with clients to create efficent,
              scalable and user-friendly solutions that solve real-world problems. Let's work together
              to bring your ideas to life!
        </motion.p>
  
        <div className='mt-20 flex flex-wrap gap-10'>
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </>
    );
  };
  
  export default SectionWrapper(About, "about");
  
  