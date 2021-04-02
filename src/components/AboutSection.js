import react from  'react';
import home1 from '../img/home1.png';
import styled from  'styled-components';
import {About, Description, Image, Hide} from '../styles';

import {motion} from   'framer-motion';
import {pageAnimation} from  '../animation';


const AboutSection = ()=>{
    const titleAnim = {
        hidden:{opacity: 0},
        show:{opacity:1, transition:{duration:2}}

    };

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
                <p>Contact any project you have in mind</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="Guy with a camera"/>
            </Image>
        </About>
    );
}




export default AboutSection;