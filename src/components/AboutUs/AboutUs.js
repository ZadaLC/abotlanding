//Libraries
import React from 'react'
import styles from '../../style'
import { Navbar, Button, Nav } from "react-bootstrap";
import discount from "../../assets/logoabot.png";
import robot from "../../assets/robot.png";
import { motion, useMotionValue, useTransform } from "framer-motion";
//Styles
import Bubble from './bubble';
import './AboutUs.css'
//Components

const AboutUs = () => {
  const url = "https://discord.com/api/oauth2/authorize?client_id=1042453396281626664&permissions=0&scope=bot%20applications.commands"
  const discordUrl = "https://discord.gg/FRpxVJKsZu"
    return (
      <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div  className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <motion.div
          
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          style={{cursor: 'pointer'}} 
          drag dragElastic={0.16} 
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        >
          <a href={url} target="_blank" rel="noopener noreferrer"><img src={discount}  alt="discount" className="w-[32px] h-[32px]" /></a>
          </motion.div>
          <p id="disclaimer" className={`${styles.paragraph} ml-2`}>
            <span id="disclaimer" className="text-white">Bot</span> En Desarrollo{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Prueba la <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Beta</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
          <motion.div
          
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          style={{cursor: 'pointer'}} 
          drag dragElastic={0.16} 
          dragConstraints={{top: 0, left: 0, right: 0, bottom: 0}}
        >
          <Bubble />
          </motion.div>
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Clickeando A-Bot.
        </h1>
        
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          A-Bot es un proyecto hobbie en desarrollo, sugerencias y feedback se aprecian!
          Unite a nuestro <a href={discordUrl} target="_blank" rel="noopener noreferrer" className='discord' >Discord</a> con el comando /help de A-Bot para cualquier consulta.
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className="w-[90%] h-[90%] relative z-[5]" />

      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
      <a href={url} target="_blank" rel="noopener noreferrer"><Button  variant="outline-dark" className="BotonContacto">Añadir a Discord</Button></a>
      </div>
    </section>
    )
}

export default AboutUs