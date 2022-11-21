//Libraries
import React from "react";
import {Row, Col, Card, CardGroup} from 'react-bootstrap';
import { motion, useMotionValue, useTransform } from "framer-motion";
import styled from "styled-components";
//Styles
import './ServiciosComponent.css'
//Components
//Assets Imports
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
    createData(1, 'Servicio','Descripcion De Servicio...', serviceone),
    createData(2, 'Servicio','Descripcion De Servicio...', servicetwo),
    createData(3, 'Servicio','Descripcion De Servicio...', servicethree),
    createData(4, 'Servicio','Descripcion De Servicio...', servicefour),
    createData(5, 'Servicio','Descripcion De Servicio...', serviceone),
    createData(6, 'Servicio','Descripcion De Servicio...', servicetwo),
    createData(7, 'Servicio','Descripcion De Servicio...', servicethree),
    createData(8, 'Servicio','Descripcion De Servicio...', servicefour)
];

const PoppedModal = () => {
  
}


    return(<>
    <div className="ServiciosPage">
    <h1 className="ServiciosTitulo" style={{
      textAlign: 'center'
    }}>Servicios</h1>
    <div className="backg" style={{ 
      backgroundImage:`url(${kv})`
    }}>
    <CardWrapper>
    <CardGroup className="CartasGrupo" scrollable={true}>
        {rows.map((row, index) =>(
          <Row xs={1} md={2} className="g-4" className="rows">
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
            <Card className="card text-center bg-white animate__animated animate__fadeInUp" id="ServicioCard" >
            <Card.Header className="CardHeader"> <img  src={row.Imagen}  className="serviceone"/></Card.Header>
            
              <Card.Body >
                <Card.Title>{row.Servicio}</Card.Title>
                <Card.Text>
                {row.Descripcion}</Card.Text>
              </Card.Body>
              
            </Card>
            </motion.div>
            
          </Col>
          
          </Row>
        ))}
        
        </CardGroup>
        </CardWrapper>
        <div/>
        </div>
        
        </div>  
</>
    
    )
}

export default ServiciosComponent
