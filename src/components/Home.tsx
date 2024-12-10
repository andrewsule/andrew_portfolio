
import {motion} from 'framer-motion'


function Home() {
  
  return (
    <div className=' flex justify-evenly flex-col  h-center  ' >
       <div className='flex md:justify-evenly items-center font-serif flex-col-reverse md:px-3 px-3 md:flex-row md:gap-0 gap-6'>

             <div>
                <motion.p
                    initial={{y:-100,opacity:0}}
                    animate={{y:0,opacity:1}}
                    transition={{delay:0.5,duration:1.5,stiffness:10}}
                    className='text-gray-100 mb-2 text-xl'>
                    Software Developer
                </motion.p>
                <motion.h1 className='text-gray-100 text-6xl' 
                    initial={{x:-100,opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{delay:0.5,duration:1.5,stiffness:10}}>
                    Hello I`m
                </motion.h1>
                <motion.h1
                    initial={{x:100,opacity:0}}
                    animate={{x:0,opacity:1}} 
                    transition={{delay:0.5,duration:1.5,stiffness:10}}
                    className='text-green-400 text-6xl'>
                        Andrew Yengi
                </motion.h1>

                <motion.div
                 initial={{opacity:0}}
                 animate={{x:0,opacity:1}}
                 transition={{delay:0.5,duration:1.5,stiffness:10}}>
                    <p className='text-gray-100 text-wrap mt-3 font-sans text-lg text-justify hidden md:block' >A passionate software developer with experince in delivering </p>
                    <p className='text-gray-100 text-wrap mt-3 font-sans text-lg text-justify hidden md:block' >scalable solutions across public and private sector. </p>

                    <p className='text-gray-100 text-wrap mt-3 font-sans text-lg text-justify md:hidden' >A passionate software developer with experince in delivering scalable solutions across public and private sector. </p>


                  
                </motion.div>

                <motion.div
                initial={{x:'-100vw'}}
                animate={{x:0}}
                transition={{duration:1, type:"spring",delay:0.5}} className='mt-6 '>
                    <button className='rounded-3xl border border-green-400 text-green-300 py-2 px-4 font-sans text-sm mr-4  mt-5'>
                        <a href='/RESUME_ANDREW_YENGI.pdf' download>
                        Download CV
                        </a>
                        
                    </button>

                    <a 
                        href='https://www.linkedin.com/in/andrew-yengi-0b4a65205?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BIoMxhSEtSny168RYeGDqdw%3D%3D'
                        className='rounded-full border border-gray-300 text-green-500 font-bold text-sm p-1'>
                        in
                    </a>
                </motion.div>
            </div>

            <motion.div className='rounded-full shadow-inner    landing_img  flex justify-center items-center'
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{delay:1,duration:1,}} >
                <motion.div className='landing_container border-b border-b-green-400 rounded-full shadow-inner '
                 initial={{opacity:0}}
                 animate={{opacity:1}}
                 transition={{delay:0.5,duration:1,}}>
                    
                </motion.div>
            </motion.div>


       </div>

       <div className='grid  md:grid-cols-4 grid-cols-3  text-sm md:text-lg mt-12 md:mt-5  md:justify-items-center gap-5 md:w-9/12 md:self-center w-full   mx-1 over_md '>
          
                <div className='flex items-center gap-2 col-span-1'>
                    <motion.p
                    initial={{}} className=' text-gray-100 md:text-6xl text-4xl'>2</motion.p>
                    <p className='text-gray-200'>Years of <br/>Experience</p>
                </div>

                <div className='flex items-center gap-2 col-span-1'>
                    <motion.p
                    initial={{}} className=' text-gray-100 md:text-6xl text-4xl'>8</motion.p>
                    <p className='text-gray-200'>Projects <br/> Completed</p>
                </div>
          
                <div className='flex items-center gap-2 col-span-1'>
                    <motion.p 
                    initial={{}}className=' text-gray-100 md:text-6xl text-4xl'>6</motion.p>
                    <p className='text-gray-200'>Technologies <br/> Mastered</p>
                </div>

                <div className='flex items-center gap-2 col-span-1'>
                    <motion.p
                    initial={{}} className=' text-gray-100 md:text-6xl text-4xl'>240</motion.p>
                    <p className='text-gray-200'>Students <br/> Trained</p>
                </div>
        
       </div>

    </div>
  )
}

export default Home
