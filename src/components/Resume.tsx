import { useState } from 'react'
import Experince from './Experince'
import Skills from './Skills'
import Education from './Education'
import {motion} from 'framer-motion'
import About from './About'

function Resume() {
  const [experience,setExperience] = useState<boolean>(true)
  const [skills,setSkills] = useState<boolean>(false)
  const [education,setEducation] = useState<boolean>(false)
  const [about,setAbout] = useState<boolean>(false)
   
  return (
    <div className='flex md:items-center md:justify-center h-5/6'>
    <div className='flex gap-10 md:w-4/6 md:flex-row flex-col w-full md:items-center md:justify-center  '>
    
            <div className='rounded-lg p-5  '>
                <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:0.5,duration:2}}>
                    <h1 className='font-bold text-4xl font-serif mb-2 text-gray-300'>Why Hire Me ?</h1>
                        <p className='text-lg  text-gray-100 mb-7 text-justify'>
                            Production of  high-quality, user-friendly solutions that are optimized for better perfotmance and  search engines with  responsiveness across all devices.
                        </p>
                </motion.div>
                <motion.button 
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{duration:1,delay:0.5,type:'spring',stiffness:30}}
                className={`w-full ${experience?'bg-green-400':'bg-gray-600'} hover:bg-green-400 text-gray-100 hover:text-gray-900 rounded-md mb-5 py-2 text-lg`} onClick={()=>{
                    setExperience(true)
                    setSkills(false)
                    setEducation(false)
                    setAbout(false)
                }}>Experience</motion.button>
                <motion.button 
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{duration:1 , delay:0.8,type:'spring',stiffness:30}}
                className={`w-full ${education?'bg-green-400':'bg-gray-600'} hover:bg-green-400 text-gray-100 hover:text-gray-900 rounded-md mb-5 py-2 text-lg`} onClick={()=>{
                    setExperience(false)
                    setSkills(false)
                    setAbout(false)
                    setEducation(true)
                }}>Education</motion.button>
                <motion.button
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{duration:1 , delay:1,type:'spring',stiffness:30}}
                className={`w-full ${skills?'bg-green-400':'bg-gray-600'} hover:bg-green-400 text-gray-100 hover:text-gray-900 rounded-md mb-5 py-2 text-lg`} onClick={()=>{
                    setExperience(false)
                    setSkills(true)
                    setEducation(false)
                    setAbout(false)
                }}>Skills</motion.button>
                <motion.button
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{duration:1 , delay:1.3,type:'spring',stiffness:30}}
                className={`w-full ${about?'bg-green-400':'bg-gray-600'} hover:bg-green-400 text-gray-100 hover:text-gray-900 rounded-md mb-5 py-2 text-lg`} onClick={()=>{
                    setExperience(false)
                    setSkills(false)
                    setAbout(true)
                    setEducation(false)
                }} >About Me</motion.button>
        
             </div>

        <div className='mx-8 md:mx-0'>
            {experience&& <Experince/>}
            {skills && <Skills/>}
            {education&& <Education/>}
            {about&&<About/>}
        </div>   
    </div>

   
    </div>
  )
}

export default Resume
