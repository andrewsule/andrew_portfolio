import {motion} from 'framer-motion'

function Services() {
  return (
    <div className='flex justify-evenly flex-col h-5/6 items-center mb-6'>

        <div className='flex items-center justify-center mb-10 '>
            <div className='flex gap-10 md:w-4/6 md:flex-row flex-col md:mx-0 mx-8 '>
                <motion.div
                initial={{y:'-50vh',opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:0.5,duration:2.5,type:"spring", stiffness:30}} className=''>
                    <div className='rounded-lg p-5 shadow-sm shadow-gray-600  hover:bg-gray-500 hover:cursor-pointer bg-gray-600 '>
                        <h1 className='font-bold text-4xl font-serif  text-gray-200 mb-6'>01</h1>
                        <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Web Development</h1>
                            <p className='text-lg  text-gray-100 text-justify'>
                            Specializes in creating responsive, scalable web applications using modern technologies with a focus on performance and user experience.
                            </p>
                    </div>
                </motion.div>

                <motion.div
                initial={{y:'-50vh',opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:0.5,duration:2.5,type:"spring", stiffness:30}} className=''>
                    <div className='rounded-lg p-5 shadow-sm shadow-gray-600 hover:bg-gray-500 hover:cursor-pointer bg-gray-600'>
                        <h1 className='font-bold text-4xl font-serif text-gray-200 mb-6'>02</h1>
                        <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Mobile App Development</h1>
                            <p className='text-lg  text-gray-100 text-justify'>
                            Develops intuitive mobile apps using React Native, ensuring cross-platform functionality and smooth user experiences across iOS and Android.
                            </p>
                    </div>
                </motion.div>   
            </div>  
        </div>

        <div className='flex items-center justify-center '>
            <div className='flex gap-10 md:w-4/6 md:flex-row flex-col md:mx-0 mx-8'>
                <motion.div
                initial={{y:'-50vh',opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:1,duration:2.5,type:"spring", stiffness:30}} className=''>
                    <div className='rounded-lg p-5 shadow-sm shadow-gray-600  hover:bg-gray-500 hover:cursor-pointer bg-gray-600'>
                        <h1 className='font-bold text-4xl font-serif text-gray-200 mb-6'>03</h1>
                        <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Ethirium Block Chain</h1>
                            <p className='text-lg  text-gray-100 text-justify'>
                            I conduct training on the principles of   secure, transparency and transparent  applications and smart contracts across various industries.
                            </p>
                    </div>
                </motion.div>

                <motion.div
                initial={{y:'-50vh',opacity:0}}
                animate={{y:0,opacity:1}}
                transition={{delay:1,duration:2.5,type:"spring", stiffness:30}} className=''>
                    <div className='rounded-lg p-5 shadow-sm shadow-gray-600 hover:bg-gray-500 hover:cursor-pointer bg-gray-600'>
                        <h1 className='font-bold text-4xl font-serif text-gray-200 mb-6'>04</h1>
                        <h1 className='font-bold text-3xl font-serif mb-2 text-green-400'>Trainings</h1>
                            <p className='text-lg  text-gray-100 text-justify'>
                            Provides practical training in web and mobile development, helping individuals and teams build expertise in modern technologies and best practices.
                            </p>
                    </div>
                </motion.div>   
            </div>  
         </div>
    </div>
  )
}

export default Services
