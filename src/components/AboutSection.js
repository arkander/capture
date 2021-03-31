import react from  'react';
import home1 from '../img/home1.png';
import styled from  'styled-components';
import {About, Description, Image, Hide} from '../styles';

const AboutSection = ()=>{

    return (
        <About>
            <Description className="description">
                <div className="title">
                    <Hide>
                        <h2>We Work to Make</h2>
                    </Hide>
                    <Hide>
                        <h2>your <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                </div>
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