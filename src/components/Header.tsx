import React, {useRef} from 'react'
import Button from './Button'

import { FaBars, FaRegWindowClose } from "react-icons/fa";

// ? document.querySelector document.getE

const Header:React.FC = () => {

  const casusElement = useRef<HTMLDivElement>(null)


const navbariAc = () => {

  if(casusElement.current){
    casusElement.current.classList.add("aktiv")
  }

}
  

const navbariBagla = () => {
  if(casusElement.current) {
    casusElement.current.classList.remove("aktiv")

  } 
}
  return (
<>
<div className="mobile-menu" ref={casusElement}>
    <FaRegWindowClose className='text-white closeicon ' onClick={navbariBagla} />

    <nav className="mobile-links">
    <a href="">Home</a>
    <a href="">About</a>
    <a href="">Services</a>
    <a href="">Blog</a>
    <a href="">Contact</a>

    <Button inTextBtn="Sign in" shekil='' klassAdi="sign-in my-3" />

    </nav>

</div>
    <nav className="navbar navbar-expand-lg menim-backgroundum ">
  <div className="container">
    <a className="navbar-brand" href="#">
        <img src="/assets/images/header/logo.svg" alt="" className='logo' />
    </a>
    <button  onClick={navbariAc} className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <FaBars />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link text-white" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="#">About</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Services</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Blog</a>
        </li>

        <li className="nav-item">
          <a className="nav-link text-white" href="#">Contact</a>
        </li>
      
       
      </ul>

      <Button inTextBtn="Sign in" shekil='' klassAdi="sign-in" />


    </div>
  </div>
</nav>
</>
   
  )
}

export default Header