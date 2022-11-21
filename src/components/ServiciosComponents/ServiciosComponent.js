//Libraries
import React from "react";
import {Row, Col, Card, CardGroup} from 'react-bootstrap';
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
import "@fontsource/poppins";
//Styles
import './ServiciosComponent.css'
//Components
//Assets Imports
import { stats } from "../stats";
import styles from "../../style";
import serviceone from '../../assets/serviceone.png'
import servicetwo from '../../assets/servicetwo.png'
import servicethree from '../../assets/servicethree.png'
import servicefour from '../../assets/servicefour.png'
import kv from '../../assets/robot.png'
function ServiciosComponent (){

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

  function createData(Id, Servicio, Descripcion, Imagen) {
    return { Id, Servicio, Descripcion, Imagen};
}

const rows = [
    createData(1, '/dolarg','Precio Dolar Oficial & Blue a tiempo real.', serviceone),
    createData(2, '/steamarg','Buscador de juegos de Steam Argentina', servicetwo),
    createData(3, '/steamtax','Aplica Impuestos de Steam a valor ingresado ', servicethree),
    createData(4, '/help','Lista de comandos activos', servicefour),
    createData(5, '/avatar','Muestra avatar del usuario elegido', serviceone)
];




    return(<>
    
    <div className="ServiciosPage">
    <h1 className="ServiciosTitulo" style={{
      textAlign: 'center'
    }}>Comandos A-Bot</h1>
    <div className="wrapper">
    <div className="backg" >
    <CardWrapper>
    <CardGroup className="CartasGrupo" scrollable={true}>
      
        {rows.map((row, index) =>(
          <Row xs={1} md={2} className="g-4" >
          <Col className="ServiceCol">
          <motion.div
          
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
            style={{cursor: 'pointer'}} 
            drag dragElastic={0.16} 
            dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
            whileTap={{cursor: 'grabbing'}}
          >
            
            
            <div key={rows.id}  >
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
        <div/>
        </div>
        </div>
        </div>  
        
</>
    
    )
}

export default ServiciosComponent
