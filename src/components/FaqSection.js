import react from  'react';
import {About} from '../styles';
import styled from  'styled-components';
import Toggle from './Toggle';
import {AnimateSharedLayout} from 'framer-motion'
import {useScroll} from './UseScroll';
import {scrollReveal} from '../animation';


const FaqSection = ()=>{
    const[element,controls] = useScroll();
    


    return (
        <Faq variants={scrollReveal} animate={controls} initial='hidden' ref={element}>
            <h2>Any questions <span>FAQ</span> </h2>
            <AnimateSharedLayout>
            <Toggle title="How do I Start?">
                 
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore.</p>
                    </div>
                
            </Toggle>
            <Toggle title="Daily Schedule">
                        
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore.</p>
                </div>               
           
            </Toggle>
            <Toggle title="Diferent payment methods">
            
                
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore.</p>
                </div>
            
            </Toggle>



            <Toggle title="What products you offer">
           
               
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, tempore.</p>
                </div>               
            
            </Toggle>

            </AnimateSharedLayout>
        </Faq>
    );

}

const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom:2rem;
        font-weight:lighter;
    }

    .faq-line{
        background:#cccccc;
        height:0.2rem;
        margin:2rem 0rem;
        width:100%auto;
    }

    .question{
        padding:3rem 0rem;
        cursor: pointer;
    }

    .answer{
        padding:2rem 0rem;
       p{
           padding:1rem 0rem;
       }
    }

`;

export default FaqSection;