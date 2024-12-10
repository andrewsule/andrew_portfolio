import React from 'react'
import react from '../assets/react.svg'
import wordpress from '../assets/wordpress.png'
import ms365 from '../assets/Microsoft-Power-Apps-logo.webp'
import native from '../assets/react-native.png'
import mogo from '../assets/mongo.png'
import sql from '../assets/sql.png'
import tailwind from '../assets/tailwind.png'
import js from '../assets/js-logo.png'
import boot from '../assets/Bootstrap.png'
import {motion} from 'framer-motion'

function Skills() {
  return (
    <div>
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}
    >
      <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Technical Skills</h1>
      <p className='text-lg  text-gray-300 mb-7 text-justify'>Proficient in a wide range of technical skills,including React js,React Native etc. I exel in builidng user-centric applications with a focus on performance and scalability.</p>
    </motion.div>

  <motion.div className='md:skill_container text-center'
  initial={{opacity:0}}
  animate={{opacity:1}}
  transition={{delay:0.5,duration:1}}>
    
  <div className="flex  justify-between gap-2 mb-7">
          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
             <img src={react} alt='' width={45}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>React Js</h1>
          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
             <img src={js} alt='' width={60}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>Java Script</h1>
          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
             <img src={boot} alt='' width={50}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>Bootstrap</h1>
          </div>
    </div>

    <div className="flex  justify-between gap-2 mb-7">
          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
             <img src={wordpress} alt='' width={50}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>Word Press</h1>

          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
            <img src={tailwind} alt='' width={80}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>Tailwind</h1>
          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
            <img src={mogo} alt='' width={50}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>Mongo DB</h1>
          </div>
    </div>

    <div className="flex  justify-between gap-2 mb-7">
          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
             <img src={native} alt='' width={70}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>React Native</h1>

          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
          <img src={ms365} alt='' width={90}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>MS 365</h1>
          </div>

          <div className='rounded-md bg-gray-600 p-5 w-1/2 flex justify-center items-center flex-col gap-2'>
          <img src={sql} alt='' width={70}/>
              <h1 className=' font-serif mb-2 text-gray-300 font-bold'>SQL</h1>
          </div>
    </div>

  </motion.div>
  </div>
  )
}

export default Skills
