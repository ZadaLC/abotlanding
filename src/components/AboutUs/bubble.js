import styles from "../../style";
import React from 'react'
import discount from "../../assets/logoabot.png";
const Bubble = () => {
    const url = "https://discord.com/api/oauth2/authorize?client_id=1042453396281626664&permissions=0&scope=bot%20applications.commands"
  return (
      <div>
    <a href={url} target="_blank" rel="noopener noreferrer">
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-transparent p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col  w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <img src={discount} alt="discount" className="w-[52px] h-[52px]" />
      </div>
       
    </div>
  </div>
  </a>
  </div>
  )
}

export default Bubble