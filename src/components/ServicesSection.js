import react from  'react';
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';
import {About, Description, Image, Hide} from '../styles';
import styled from  'styled-components';

const ServicesSection = ()=>{

    return (
        <Services>
            <Description>
                <h2>High <span>quality</span> services</h2>            
            
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>     
                        <p>Lorem ipsum dolor sit amet.</p>       
                    </Card> 

                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Money</h3>
                        </div>     
                        <p>Lorem ipsum dolor sit amet.</p>       
                    </Card>  

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>     
                        <p>Lorem ipsum dolor sit amet.</p>       
                    </Card>  

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>     
                        <p>Lorem ipsum dolor sit amet.</p>       
                    </Card>             
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Home 2"/>
            </Image>
        </Services>
    );
}

const Services = styled(About)`
  
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
  @media (max-width: 1500px) {
    
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1500px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
  @media (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ServicesSection;