
import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

import Home from './components/Home'
import About from './components/About'

import { ToastContainer } from 'react-toastify'

import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound'
import Contact from './components/Contact'

import Blogs from './components/Blogs'
import Services from './components/Services'

import Header from './components/Header'
function App() {

  return (
    <>

    <BrowserRouter>


    <Header />
    <ToastContainer />

     <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/haqqimizda' element={<About />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/bizimle-elaqe' element={<Contact />} />
        <Route path='/bloqlar' element={<Blogs />} />
        <Route path='/xidmetlerimiz' element={<Services />} />
     </Routes>
    
    </BrowserRouter>
    

    </>
   
  )
}

export default App
