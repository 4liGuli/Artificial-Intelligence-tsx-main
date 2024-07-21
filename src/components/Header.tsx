import React, {useRef} from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';
import { FaBars, FaRegWindowClose } from "react-icons/fa";

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
        <FaRegWindowClose className='text-white closeicon' onClick={navbariBagla} />
        <nav className="mobile-links">
        <Link to="/">Home</Link>
        <Link to="/haqqimizda">About</Link>
        <Link to="/xidmetlerimiz">Services</Link>
        <Link to="/bloqlar">Blog</Link>
        <Link to="/bizimle-elaqe">Contact</Link>
        <Button inTextBtn="Sign in" shekil='' klassAdi="sign-in my-3" />
        </nav>
      </div>
        <nav className="navbar navbar-expand-lg menim-backgroundum ">
      <div className="container">
        <Link className="navbar-brand" to="/">
            <img src="/assets/images/header/logo.svg" alt="" className='logo' />
        </Link>
        <button  onClick={navbariAc} className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link text-white" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/haqqimizda">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/xidmetlerimiz">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/bloqlar">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/bizimle-elaqe">Contact</Link>
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