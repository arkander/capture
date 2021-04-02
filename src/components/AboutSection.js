import react from  'react';
import home1 from '../img/home1.png';
import styled from  'styled-components';
import {About, Description, Image, Hide} from '../styles';

import {motion} from   'framer-motion';
import {pageAnimation} from  '../animation';
import {titleAnim, fade, photoAnim} from '../animation';

const AboutSection = ()=>{
  
    const container = {
        hidden:{x:100},
        show:{x:0, transition:{duration:0.75, ease:'easeOut', staggerChildren:0.25}}
    }

    return (
        <About>
            <Description className="description">
                <motion.div className="title" variants={container} initial="hidden" animate="show">
                    <Hide>
                        <motion.h2 variants={titleAnim} initial="hidden" animate="show">We Work to Make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnim}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade} initial="hidden" animate="show">Contact any project you have in mind</motion.p>
                <motion.button variants={fade} initial="hidden" animate="show">Contact Us</motion.button>
            </Description>
            <Image>
                <motion.img src={home1} alt="Guy with a camera"  variants={photoAnim} initial="hidden" animate="show"/>
            </Image>
        </About>
    );
}

export default AboutSection;