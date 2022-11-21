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



function NavBar({servicio, sobreNosotros}){

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
        <Button variant="outline-light" id="botonlogo" onClick={scrollToTop}>
        <img  src={logo}  className="logonavbar"/>
        </Button>
        <h3 className="kiuviname">A-Bot</h3>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" >
        
          <Nav className="ml-auto" navbar>
          <Nav.Link ><Link id="menuitem" onClick={scrollToTop} spy={true} smooth={true}>Home</Link></Nav.Link>
          <Nav.Link><Link id="menuitem" to="AboutUs" spy={true} smooth={true}>Comandos</Link></Nav.Link>
            <Link id="menuitem" to="Contact" spy={true} smooth={true}><Button variant="outline-info" href="#" className="BotonContacto">Invite</Button></Link> 
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    );
  
}

export default NavBar;
