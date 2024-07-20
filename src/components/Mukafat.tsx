import React from 'react'

interface MukafatProps {
  mukafatTitle:string;
  mukafatImg:string;
  mukafatParaqraf:string
}

const Mukafat:React.FC<MukafatProps> = ({mukafatTitle, mukafatImg, mukafatParaqraf}) => {
  return (
  <div className='award-card  py-5'>
  <img src={mukafatImg} className="card-img-top" alt="..." />
  <div className=" text-center text-white">
    <h2 className="h3">{mukafatTitle}</h2>
    <p className="card-text">{mukafatParaqraf}</p>
  </div>
  </div>
  )
}

export default Mukafat