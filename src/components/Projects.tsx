import  { useState } from 'react'
import projects from '../assets/projects'
import {motion} from 'framer-motion'


function Projects() {
    const [count,setCount] = useState<number>(0)

    const increase = ()=>{
       if(count<=5){
        setCount(count+1)
       }
       else{
        setCount(0)
       }
    }
    const decrease = ()=>{
        if(count>=1){
         setCount(count-1)
        }
        else{
         setCount(6)
        }
     }
  return (

       <div className='flex  md:justify-center h-center md:flex-row flex-col'>
      
            <motion.div className='flex gap-10 md:w-4/6 md:mt-28 md:flex-row flex-col'
            initial={{x:'-100vw',opacity:0}}
            animate={{x:0,opacity:1}}
            transition={{delay:0.5,duration:1.5,type:"spring", stiffness:20}}>
                     <div className=' p-5 md:w-1/2 w-full'>
                        <h1 className='font-bold text-4xl font-serif mb-9 text-gray-100 text-shadow'>0{projects[count].id}</h1>
                        <h1 className='text-3xl font-bold text-green-400 font-serif mb-5'>{projects[count].name}</h1>
                        <p className='  text-gray-200 mb-3 text-justify text-lg'>
                            {projects[count].description}
                        </p> 
                        {projects[count].technologies.map((technology:any)=>{
                            return(
                                    <span key={technology} className='text-green-500'> {technology} </span>
                                    )
                                })}
                        
                    </div>

                    <div className='md:w-1/2 w-full  '>
                       <motion.div className='project_image_container md:w-full ml-4 md:mx-0 w-11/12'
                       initial={{opacity:0}}
                       animate={{opacity:1}}
                       transition={{delay:1.5,duration:1}}>
                        <img 
                                src={projects[count].image} alt=''
                                width={500}
                                height={500}
                                className='h-full rounded-md w-full '
                            />
                       </motion.div>

                        <div className='float-end mt-2 mx-3 md:mx-0'>
                            <button className='bg-green-400 p-2 px-5 mr-3' onClick={decrease}><i className='fa fa-angle-left' ></i></button>

                            <button className='bg-green-400 p-2 px-5' onClick={increase}><i className='fa fa-angle-right' ></i></button>
                        </div>
                    </div>    
                </motion.div>
    </div>
    
  )
}

export default Projects
