import react from  'react';
import styled from  'styled-components';
import {Link} from 'react-router-dom';
import {motion} from   'framer-motion';
import {useLocation} from 'react-router-dom';
const Nav = ()=>{
    const {pathname} = useLocation();

    return (
        <StyledNav>
            <h1>
                <Link id="logo" to="/">Capture</Link>
                
            </h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                    <Line transition={{duration:0.75}}
                          initial={{width:"0%"}}
                          animate={{width:pathname === '/' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to="/work">Our Work</Link>
                    <Line transition={{duration:0.75}}
                          initial={{width:"0%"}}
                          animate={{width:pathname === '/work' ? '50%' : '0%'}}/>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                    <Line transition={{duration:0.75}}
                          initial={{width:"0%"}}
                          animate={{width:pathname === '/contact' ? '50%' : '0%'}}/>
                </li>
            </ul>

        </StyledNav>
    );

}

const StyledNav = styled.nav`
    min-height:10vh;
    display:flex;
    margin:auto;
    justify-content:space-between;
    align-items:center;
    padding: 1rem 10rem;
    background:#282828;
    position:sticky;
    top:0;
    z-index:10;
    
    ul {
        display: flex;
        list-style: none;
    }
    li {
        padding-left: 10rem;
        position: relative;
    }
    a {
        color: white;
        text-decoration: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter;
    }
    @media (max-width: 1500px) {
        flex-direction:column;
        padding:2rem 1rem;
        ul{
            padding:2rem;
            justify-content:space-between;
            width:100%;
        }
        #logo {
            display:inline-block;
            margin:1rem;
        }
  }
`;

const Line = styled(motion.div)`
    height:0.3rem;
    background:#23d997;
    position:absolute;
    width:0%;
    bottom:-80%;
    left:60%;
    @media (max-width: 1300px) {
        left:0%;
  }

`;

export default Nav;