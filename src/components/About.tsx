import React from 'react'
import {motion} from 'framer-motion'

function About() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>

      <h1 className='font-bold text-3xl font-serif mb-2 text-green-400 '>About me</h1>
      <p className='text-lg  text-gray-300 mb-7 border-b pb-5'>A passionate software developer with a strong foundation in computer science and hands-on esperience in building impactful projects for both public and private sector.</p>
      <motion.div className="flex  justify-between gap-1 mb-7 md:flex-row flex-col"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:0.5,duration:1}}>
            <ul>
                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Name:  
                    </span>
                    <span className='text-gray-300'>
                     Andrew Yengi
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Experience:  
                    </span>
                    <span className='text-gray-300'>
                         2 Years
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Tutoring:  
                    </span>
                    <span className='text-gray-300'>
                     Available
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Frelancing:  
                    </span>
                    <span className='text-gray-300'>
                     Available
                    </span>
                </li>
            </ul>

            <ul>
                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Phone:  
                    </span>
                    <span className='text-gray-300'>
                    +255(0) 673 742 473
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Skype:  
                    </span>
                    <span className='text-gray-300'>
                        andrew Yengi
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Email:  
                    </span>
                    <span className='text-gray-300'>
                     andrewyengi@outlook.com
                    </span>
                </li>

                <li className='text-lg mb-4'>
                    <span className=' text-gray-300 font-bold'>
                    Languages:  
                    </span>
                    <span className='text-gray-300'>
                     English, Kiswahili, Arabic
                    </span>
                </li>
            </ul>

           
      </motion.div>

      
    </motion.div>
  )
}

export default About
