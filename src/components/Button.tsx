import React from 'react'

interface ButtonProps {
  inTextBtn:string,
  shekil:string,
  klassAdi:string
}

const Button:React.FC<ButtonProps> = ({inTextBtn, shekil, klassAdi}) => {
  // debugging


  return (
    <button className={klassAdi}> <img src={shekil} alt="" /> {inTextBtn} </button>
  )
}

export default Button





