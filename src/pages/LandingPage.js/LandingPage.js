
//Libraries
import React from 'react'
import Aos from 'aos'
import styles from '../../style';
import { useEffect, useRef, useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import logo from '../../assets/KVLogo.png'
import { Fab, Action } from 'react-tiny-fab';
//Style
import './LandingPage.css'
import 'aos/dist/aos.css'
import 'react-tiny-fab/dist/styles.css';
//Components
import NavBar from '../../components/Navbar/Navbar';
import ServiciosComponent from '../../components/ServiciosComponents/ServiciosComponent'
import Footer from '../../components/Footer/Footer';
import Contact from '../../components/Contact/Contact';
import Carousel from '../../components/Carousel/Carousel';
import AboutUs from '../../components/AboutUs/AboutUs';


const LandingPage = () => {
    useEffect(() => {
        Aos.init({duration: 1000});
    }, [])

    const [isVisible, setIsVisible] = useState(false);
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth"
        });
    };
    const scrollToBottom = () =>{ 
        window.scrollTo({ 
          top: document.documentElement.scrollHeight, 
          behavior: 'smooth'
        }); 
      }; 
    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);


    return (
        <>
        <div className=" w-full overflow-hidden">
        <div className='landingbody'>

                <NavBar/>
                
            
            <div data-aos="fade-down" className={`${styles.flexStart}`} >
                <AboutUs/>
            </div>
            <div data-aos="fade-down" className='ServiciosComponent'>
                <ServiciosComponent/>
            </div>
            
            {/* {isVisible &&(
                <Fab
                id="fabid"
                mainButtonStyles={{ backgroundColor: '#4FEAA9'}}
                icon={<i class="material-icons">menu</i>}
                >
    
                <Action
                onClick={scrollToBottom}
                text="Contacto"
                style={{"backgroundColor": "#4FEAA9"}}
                >
    
                <i class="material-icons">arrow_drop_down</i>
                </Action>
    
                <Action
                onClick={scrollToTop}
                text="Inicio"
                style={{"backgroundColor": "#4FEAA9"}}
                >
    
                <i class="material-icons">arrow_drop_up</i>
                </Action>
                </Fab>
            )} */}

        </div>
        </div>
        </>
    )
}

export default LandingPage
