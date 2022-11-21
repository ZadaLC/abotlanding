//Libraries
import React, {useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import { Navbar, Button, Nav } from "react-bootstrap";
import {Link} from 'react-scroll'
import {useRef} from 'react'
//Assets
import logo from '../../assets/logoabot.png'
import './Navbar.css'
import { motion, useMotionValue, useTransform } from "framer-motion";


function NavBar({servicio, sobreNosotros}){
  
  const url = "https://discord.com/api/oauth2/authorize?client_id=1042453396281626664&permissions=0&scope=bot%20applications.commands"
   const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth"
    });
};
    return (
      <Navbar
        bg="light"
        className="navbar shadow-sm p-1 mb-5 bg-white rounded"
        expand="lg"
        collapseOnSelect
        id="navbarid"
        style={{position: "sticky"}}
        fixed='top'
      >
        <Button variant="outline-dark" id="botonlogo" onClick={scrollToTop}>
        <motion.div
          
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          style={{cursor: 'pointer'}} 
          drag dragElastic={0.16} 
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        >
        <a href={url} target="_blank" rel="noopener noreferrer"><img  src={logo}  className="logonavbar"/></a>
        </motion.div>
        </Button>
        <h3 className="kiuviname">A-Bot</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
        
          <Nav className="ml-auto" navbar>
          <Nav.Link ><Link id="menuitem" onClick={scrollToTop} spy={true} smooth={true}>A-Bot Home</Link></Nav.Link>
          <Nav.Link><Link id="menuitem" to="ServiciosComponent" spy={true} smooth={true}>Comandos</Link></Nav.Link>
            <a id="menuitem" href={url} target="_blank" rel="noopener noreferrer" spy={true} smooth={true}><Button  variant="outline-dark" className="BotonContacto">Añadir a Discord</Button></a> 
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    );
  
}

export default NavBar;
