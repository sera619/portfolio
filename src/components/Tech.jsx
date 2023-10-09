import React from "react";
import { styles } from "../styles";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { Typewriter } from 'react-simple-typewriter';

const Tech = () => {
  const handleType = (count) => {}
  const handleDone = () =>{console.log("Done after 5 loops!");}
  const textList = [];
  technologies.map((tech) => {
    textList.push(tech.name);
  })
  return (
     <section className="box w-full my-20 ">
        <div className="justify-center items-center w-full mb-5">
          <p className={`${styles.sectionSubText} text-center`}>My know how</p>
          <h2 className={`${styles.sectionHeadText} text-center`}>Tech-Skills.</h2>
          <p className={`${styles.sectionSubText} text-center`}>Like: <span className="text-[#02c8d6]">
          <Typewriter words={textList}
                      loop={5}
                      cursor
                      cursorStyle='_'
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                      onLoopDone={handleDone}
                      onType={handleType}></Typewriter></span></p>

        </div>
        <div className='flex flex-row flex-wrap justify-center gap-10 m-auto'>
          {technologies.map((technology) => (
            <div className='w-20 h-20' key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          ))}
        </div>

      </section>
    
    
  );
};

export default SectionWrapper(Tech, "tech");