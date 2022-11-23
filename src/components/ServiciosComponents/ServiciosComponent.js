//Libraries
import React, { useState, useEffect } from "react";
import {Row, Col, Card, CardGroup} from 'react-bootstrap';
import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import "@fontsource/poppins";
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
//Styles
import './ServiciosComponent.css'
//Components
//Assets Imports
import { Steamarg, Dolarg, Avatarfigma, Infofigma, SteamTax  } from "./serviciosassets";

function ServiciosComponent (){
  const [commInfo, setCommInfo] = useState()
  const [activeValue, setactiveValue] = useState()
  const CardWrapper = styled.div`
  width: 100%;
  perspective: 2000;
  display: flex;
  `;
  const CardContainer = styled(motion.div)`
  display: flex;
  `;
  const CardContainer2 = styled(motion.div)`
  display: flex;
  `;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);
  const [sumofstrings, setSumofStrings] = useState()
  function createData(Id, Servicio, Descripcion, Imagen, Example) {
    
    return { Id, Servicio, Descripcion, Imagen, Example};
}

const rows = [
    createData(1, '/dolarg','Precio Dolar Oficial & Blue a tiempo real.', Dolarg, ''),
    createData(2, '/steamarg','Buscador de juegos de Steam Argentina', Steamarg, ' : Elden Ring'),
    createData(3, '/steamtax','Aplica Impuestos de Steam a valor ingresado ', SteamTax, ' : 1500'),
    createData(4, '/help','Lista de comandos activos', Infofigma, ''),
    createData(5, '/avatar','Muestra avatar del usuario elegido', Avatarfigma, ' : @username')
];
const [pres, setPres] = useState(false)
function scrolldown(){
  window.scrollTo({ 
    top: document.documentElement.scrollHeight, 
    behavior: 'smooth'
  }); 
}
function setIdForCommandAnimation(id){
  var strinAnidada = (rows[(id-1)].Servicio + rows[(id-1)].Example)
  setSumofStrings(strinAnidada.length)
  setPres(false)
  
  
  setTimeout(() => setCommInfo(''),100)
  setTimeout(() => setCommInfo(rows[(id-1)]), 300)
  setTimeout(() => scrolldown(),((strinAnidada.length * 150) + 500))
  setTimeout(() => setPres(true), ((strinAnidada.length * 150) + 1000))
}

useEffect(() => {
  // Update the document title using the browser API
  console.log(commInfo)
  console.log(sumofstrings)
});

    return(<>
    
    <div className="ServiciosPage">
    <h1 className="ServiciosTitulo" style={{
      textAlign: 'center'
    }}>Comandos A-Bot</h1>
    <div className="wrapper">
    <div id="scrolltobut" className="backg" >
    <CardWrapper>
    <CardGroup className="CartasGrupo" scrollable={true}>
      
        {rows.map((row, index) =>(
          <Row xs={1} md={2} className="g-4" >
          <Col className="ServiceCol">
          <motion.div
          
            whileHover={{ scale: 0.8 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            whileTap={{ scale: 0.9 }}
            style={{cursor: 'pointer'}}
          >
            
            
            <div key={row.Id} onClick={() => setIdForCommandAnimation(row.Id)}>
            <h4 className="serviciotitle">
                {row.Servicio}
            </h4>
            <p className="serviciodesc text-gradient uppercase ml-3">
                {row.Descripcion}
            </p>
            </div>
              
            </motion.div>
            
          </Col>
          
          </Row>
        ))}
        
        
        </CardGroup>
        
        </CardWrapper>
        {commInfo ? 
        <>
        <div className="hideanimation">
        <div className="animationCommand">
        <AutoTyping
        className = 'serviciotitle'
        active // <boolean>
        textRef={(commInfo.Servicio + commInfo.Example)} // <string>
        writeSpeed={150} // <number>
        deleteSpeed={150} // <number>
        delayToWrite={1000} // <number>
        delayToDelete={200000} // <number>
        />
        <BlinkCursor
        className = 'serviciotitle'
        active // <boolean>
        blinkSpeed={500} // <number>
        />
        
        </div>
        <div className="imagecommandwrapper">
        <AnimatePresence>
          {pres ? (
            <motion.img 
            key={commInfo.Imagen} 
            src={commInfo.Imagen} 
            initial={{ y: "50%", opacity: 0 , scale: 0.5}} 
            animate={{y: 0, opacity: 1, scale: 1}}
            exit={{ 
              y: "50%",
              opacity: 0,
              transition: {duration: 0.1}
            }} 
            alt="billing" id="imagecommand" className="w-[20%] h-[20%] relative z-[5]" />
          )
        :
        null}
        
        </AnimatePresence>
        </div>
        </div>
        </>
        :
        <></>}
        
        <div/>
        </div>
        </div>
        
        </div>  
        
</>
    
    )
}

export default ServiciosComponent
