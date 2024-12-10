import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion} from 'framer-motion'

function Navbar() {
     const loctation  = useLocation()
     const path = loctation.pathname
    
    const [show,setShow] = useState<boolean>(true)
  return (
  <motion.header className='md:flex md:justify-around md:gap-28 justify-between py-3 md:py-6 md:px-0 px-6'
  initial={{y:'-100vh'}}
  animate={{y:0}}
  transition={{delay:0.5,duration:1.5,type:"spring"}}>
    <div className='flex justify-between items-center'>
        <Link to="/" className='font-bold text-2xl text-gray-100 mb-4 md:mb-0'>Yengi <span className='text-green-300'>.</span></Link>

        <button onClick={()=>setShow(!show)} className='md:hidden block'>
            <span className='fa fa-bars text-gray-100 ' ></span>
        </button>
       
    </div>

    <nav className={`md:flex md:flex-row  md:gap-5  ${show?"hidden":null}`}>
        <ul className='mb-5'>
             <Link to="/" className={`text-gray-100 hover:underline hover:text-green-300 ${ path==="/"?"text-green-300":null}`}
             onClick={()=>setShow(!show)}>Home</Link>
        </ul>

        <ul className='mb-5'>
             <Link to="/services" className={`text-gray-100 hover:underline hover:text-green-300 ${ path==="/services"?"text-green-300":null}`}
             onClick={()=>setShow(!show)}>Services</Link>
        </ul>

        <ul className='mb-5'>
             <Link to="/resume" className={`text-gray-100 hover:underline hover:text-green-300 ${ path==="/resume"?"text-green-300":null}`}
             onClick={()=>setShow(!show)}>Resume</Link>
        </ul>

        <ul className='mb-5'>
             <Link to="/projects" className={`text-gray-100 hover:underline hover:text-green-300 ${ path==="/projects"?"text-green-300":null}`}
             onClick={()=>setShow(!show)}>Projects</Link>
        </ul>

        <ul className='mb-5'>
           
             <Link to="/contacts" className={`text-gray-100 hover:underline hover:text-green-300 blinker ${ path==="/contacts"?"text-green-300":null}`}
             onClick={()=>setShow(!show)}>Contacts</Link>
        </ul>

       
    </nav>
  </motion.header>
  )
}

export default Navbar
