import React from "react";
import { socialLinks } from "../constants";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn, textVariant } from "../utils/motion";

const SocialBar = () => {
    function openLink(link) {
        window.open(link, '_blank').focus();
    }
    return (
        <section className="relative w-full mt-5 h-screen mx-auto z-20">
            <motion.div variants={textVariant()} className="my-10">
                <p className={`${styles.sectionSubText} text-center mt-10`}>Connect with me</p>
                <h2 className={`${styles.sectionHeadText} text-center mb-5`}>Social HUB.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='my-5 text-secondary mx-auto w-full text-center text-[17px] max-w-3xl'>
                Here you can find all my socialmedia links. Dont be shy and contact me if you need help
                or something else. I swear i will not bite!
            </motion.p>

            <motion.div variants={slideIn("right", "tween", 0.2, 1)} className="flex mt-15 justify-center align-center text-center">

                <ul className="w-full">
                    {socialLinks.map((link) => (
                        <li key={link.id} className="mx-auto w-3/4 px-20 my-5 ">
                            <div className="menubtn px-2 py-4 text-center"

                                onClick={() => openLink(link.link)}>
                                {link.title}&nbsp;
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <i className={`${link.id} pl-3`}></i>
                            </div>
                        </li>
                    ))}
                    <li key={"home-btn"} className="mx-auto w-3/4 px-20 my-5">
                        <div className="menubtn px-2 py-4 text-center  "
                            onClick={() => window.open('/portfolio/', "_self")}>
                            Home
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <i className={`fa-solid fa-home pl-3`}></i>
                        </div>
                    </li>
                </ul>

            </motion.div>
        </section>
    )
}


export default SectionWrapper(SocialBar, "social");