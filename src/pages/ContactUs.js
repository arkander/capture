import React from 'react';
import {pageAnimation} from  '../animation';
import {motion} from 'framer-motion';

const ContactUs = ()=>{

    return (
        <motion.div variants ={pageAnimation} 
                    animate="show" 
                    initial="hidden" 
                    style={{background:'#fff'}}
                    exit="exit">
            <h1>Contact Us</h1>
        </motion.div>
    );

}

export default ContactUs;