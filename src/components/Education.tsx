import React from 'react'
import {motion} from 'framer-motion'

function Education() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{duration:1}}>

      <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Education Background</h1>
      <p className='text-lg  text-gray-300 mb-7'>Bachelors in Computer Science from Chandigah University - India combinied with practical experince in full stack development has provided me with a dep understanding of software engineering principles and lateset technologies.</p>
      <motion.div className="flex  justify-between gap-2 mb-7 md:flex-row flex-col"
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:1}}>
            <div className='rounded-md bg-gray-600 p-5 md:w-1/2 '>
                <p className='font-bold text-green-500'>2020-2024</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>Computer Science Engineering</h1>

                <ul>
                <li className='  text-gray-200'>Chandigarh University</li>
                    <li className='  mb-2 text-gray-200'>Chandigarh India</li>
                </ul>
            </div>

            <div className='rounded-md bg-gray-600 p-5 md:w-1/2 '>
                <p className='font-bold text-green-500'>2018-2019</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>A level High School Education</h1>

                <ul>
                <li className='  text-gray-200'>St Mary`s Kitende</li>
                    <li className=' mb-2 text-gray-200'>Kampala Uganda</li>
                </ul>
            </div>
      </motion.div>

      <motion.div className="flex  justify-between gap-2 mb-7  md:flex-row flex-col"
       initial={{opacity:0}}
       animate={{opacity:1}}
       transition={{delay:0.5,duration:1}}>
            <div className='rounded-md bg-gray-600 p-5 md:w-1/2 '>
                <p className='font-bold text-green-500'>2013-2017</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>O level High School Education </h1>

                <ul>
                <li className='  text-gray-200'>St Mary`s Kitende</li>
                    <li className='  mb-2 text-gray-200'>Kampala Uganda</li>
                </ul>
            </div>

            <div className='rounded-md bg-gray-600 p-5 md:w-1/2 '>
                <p className='font-bold text-green-500'>2004 -2013</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>Primary Level Education</h1>

                <ul>
                    <li className='  text-gray-200 '>Ebenezer Primary School</li>
                    <li className=' mb-2 text-gray-200'>Kampala Uganda</li>
                    
                </ul>
            </div>
      </motion.div>
    </motion.div>
  )
}

export default Education