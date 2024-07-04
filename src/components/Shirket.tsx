import React from 'react'

interface ShirketProps {
    shirketinLogosu:string
}

const Shirket:React.FC<ShirketProps> = ({shirketinLogosu}) => {
  return (
    <img src={shirketinLogosu} alt="logo error" className='w-100'  />
  )
}

export default Shirket