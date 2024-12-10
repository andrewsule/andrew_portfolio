import {  useRef,useState } from 'react'
import {motion} from 'framer-motion'
import emailjs from 'emailjs-com';




function Contacts() {
    const form:any = useRef();

    type FormData = {
        user_name: string;
        user_phone: string;
        message: string;
        user_email: string;
    };

    const [formData, setFormData] = useState<FormData>({
        user_name: '',
        user_phone: '',
        message: '',
        user_email: '',
    });

    const [err, setErr]=useState({
        success:false,
        failed:false
    })
   
    const handleChange = (e:any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
   
    const sendEmail = (e:any) => {
        e.preventDefault();
        emailjs.send(
                'service_0pahyc9', // Replace with your EmailJS service ID
                'template_zddaahe', // Replace with your EmailJS template ID
                formData,
                'ajvUkgMFOkz3gFVgq' // Replace with your EmailJS user ID
            )
            .then(
                (result:any) => {
                    setErr({success:true,failed:false})
                    setTimeout(()=>{
                        setErr({success:false,failed:false})
                    },4000)
                    setFormData({
                        user_name: ' ',
                        user_phone: ' ',
                        message: ' ',
                        user_email: ' ',
                    });
                    
                },
                (error:any) => {
                    console.error(error.text);
                    setErr({success:false,failed:true})
                    setFormData({
                        user_name: ' ',
                        user_phone: ' ',
                        message: ' ',
                        user_email: ' ',
                    });
                    setTimeout(()=>{
                        setErr({success:false,failed:false})
                    },4000)
                }
            );
            setFormData({
                user_name: ' ',
                user_phone: ' ',
                message: ' ',
                user_email: ' ',
            });
    };
    
  return (
    <div className='flex items-center justify-center h-center '>
    <motion.div className='flex gap-10 md:w-4/6 md:flex-row flex-col w-full'
    initial={{y:'-50vh',opacity:0}}
    animate={{y:0,opacity:1}}
    transition={{delay:0.5,duration:2,type:"spring", stiffness:20}}>
    
            <div className='rounded-lg p-5  bg-slate-600 md:w-1/2 mx-8 md:mx-0'>
                <h1 className='text-3xl font-bold text-green-400 font-serif'>Let`s Work together</h1>
                <p className='text-lg text-gray-200 mb-6'> Send me a message and I will get back to you within the next 24 hours.</p>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' required className='rounded-md mb-4 outline-none focus:outline-none w-full p-3 text-gray-100 bg-gray-800' placeholder='Name' name="user_name" onChange={handleChange}/>

                    <input type='text'required  className='rounded-md mb-4 outline-none focus:outline-none w-full p-3 text-gray-100 bg-gray-800' placeholder='Contact' name="user_phone" onChange={handleChange}/>

                    <input type='text'required  className='rounded-md mb-4 outline-none focus:outline-none w-full p-3 text-gray-100 bg-gray-800' placeholder='Email' name="user_email" onChange={handleChange}/>

                    <textarea placeholder='Enter a message'  className='rounded-md mb-4 outline-none focus:outline-none w-full p-3 text-gray-100 bg-gray-800' name="message" onChange={handleChange}/>
                    <button className='bg-green-400 px-4 py-3 text-white rounded-lg'>Send</button>
                    {err.success && <span className='text-green-600 mx-5 text-lg'>Details have been sent successfully</span>}
                    {err.failed && <span className='text-red-600 mx-5 text-lg'>Failed to send your details.<br/>Please check your connection</span>}
                </form>
             </div>

        <motion.div className='flex md:justify-center items-center mx-8 md:mx-0'
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{delay:1.5,duration:2}}>
           <ul className='flex flex-col gap-3'>
                <li className='flex gap-3'>
                    <div className='bg-slate-600 rounded-md p-3 text-center' >
                        <i className='fa fa-phone text-green-400'/>
                    </div>
                    <div>
                        <p className='text-gray-100'>Phone</p>
                        <span className='font-bold text-gray-200'>+255(0) 673 742 473</span>
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div className='bg-slate-600 rounded-md p-3 text-center'>
                        <i className='fa fa-envelope text-green-400'/>
                    </div>
                    <div>
                        <p className='text-gray-100'>Email</p>
                        <span className='font-bold text-gray-200'>andrewyengi@outlook.com</span>
                    </div>
                </li>
                <li className='flex gap-3'>
                    <div className='bg-slate-600 rounded-md p-3 text-center'>
                        <i className='fa fa-location text-green-400'/>
                    </div>
                    <div>
                        <p className='text-gray-100'>Address</p>
                        <span className='font-bold text-gray-200'>Mikocheni  Dar es Salaam</span>
                    </div>
                </li>
           </ul>
        </motion.div>   
    </motion.div>

   
    </div>
  )
}

export default Contacts
