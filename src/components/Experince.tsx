import React from 'react'
import {motion} from 'framer-motion'

function Experince() {
  return (
    <motion.div
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1,delay:0.5}}>
      <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>My experience</h1>
      <p className='text-lg  text-gray-300 mb-7'>My extensive experience in software development,including leading projects like The Stella Tanganyika Pharmacy Management System has equiped me with strong techical skills and ability to deliver impactful solutions across varios sectors.</p>
      <motion.div className="flex  justify-between gap-2 mb-7 md:flex-row flex-col "
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:1}}>
            <div className='rounded-md bg-gray-600 p-5 md:w-1/2'>
                <p className='font-bold text-green-500'>2023-2024 <br/>Solitaire Infosys</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>Software Developer</h1>

                <ul>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Developed differnt web sites</li>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Maintained and updated existing sites</li>
                </ul>
            </div>

            <div className='rounded-md bg-gray-600 p-5 md:w-1/2'>
                <p className='font-bold text-green-500'>2022-Current<br/>Stella Tanganyika Pham.</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>IT Specialist</h1>

                <ul>
                    <li className=' mb-2 text-gray-200 list-disc ml-2'>Developed amd maintain the system</li>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Managed all the IT operations</li>
                </ul>
            </div>
      </motion.div>

      <motion.div className="flex  justify-between gap-2 mb-7 md:flex-row flex-col  "
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{delay:0.5,duration:1}}>
            <div className='rounded-md bg-gray-600 p-5 md:w-1/2'>
                <p className='font-bold text-green-500'>2023-current <br/> Freelancing</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>Software Developer</h1>

                <ul>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Developed web sites</li>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Maintained existing sites</li>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Advise clients </li>
                </ul>
            </div>

            {/* <div className='rounded-md bg-gray-600 p-5 md:w-1/2'>
                <p className='font-bold text-green-500'>2023-2024</p>
                <h1 className=' font-serif mb-2 text-gray-200 font-bold'>Software Developer</h1>

                <ul>
                    <li className=' mb-2 text-gray-200 list-disc ml-2'>Developed a web sites</li>
                    <li className='  mb-2 text-gray-200 list-disc ml-2'>Maintained existing sites</li>
                </ul>
            </div> */}
      </motion.div>
    </motion.div>
  )
}

export default Experince
