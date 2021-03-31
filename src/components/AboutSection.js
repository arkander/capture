import react from  'react';
import home1 from '../img/home1.png';
import styled from  'styled-components';


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

const About = styled.div`
    min-height:90vh;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:5rem 10rem;
    color:white;

`

const Description = styled.div`
    flex:1;
    padding-right:5rem;
    h2{
        font-weight:lighter;
    }
`

const Image = styled.div`
    flex:1;   
    overflow:hidden; 
    img{
        width:100%;
        height:80vh;
        object-fit:cover;
    }
`

const Hide = styled.div`      
    overflow:hidden;     
`


export default AboutSection;