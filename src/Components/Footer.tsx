import React from 'react'
import { serviceObj, socialMediaIcons } from '../data'
import {ChevronDown} from 'lucide-react'
function Footer() {
    const [openAccordions, setOpenAccordions] = React.useState({});

    const toggleAccordion = (id:number) => {
        setOpenAccordions((prev) => ({
            ...prev,
            [id]: !prev[id],
        })); };  

      const servicesTitles = serviceObj.map((service) =>{
        return(
            <div key={service.id} className='w-full'> {/* items container */}

           <input type="checkbox" className='invisible hidden peer' id={`accordion-${service.id}`} onChange={() => toggleAccordion(service.id)}/>
            <label htmlFor={`accordion-${service.id}`} className="font-bold text-[#bbb] mb-4 text-[14px] max-md:text-[18px] max-md:items-center max-md:flex 
            max-md:justify-between">
            {service.title}
            <ChevronDown size={20} strokeWidth={1.5} className={`md:hidden max-md:transition-transform max-md:duration-300 ${openAccordions[service.id]?' max-md:rotate-180':'max-md:rotate-0'}`} />
                        </label>
        <ul className='max-md:overflow-hidden max-md:h-0 max-md:transition-all peer-checked:max-md:duration-5000 peer-checked:max-md:h-auto '>
            {service.links.map((item)=>(<li key={item} className='mb-2'><a href="#" className='transition-colors duration-200 hover:text-gray-300'>{item}</a></li>))}
        </ul>
    </div>
        )
    })

    // SC is Social Media
    const SCMediaList = socialMediaIcons.map((SC)=>{
        return <li key={SC.URL} className='p-1 border-2 rounded-[6px] border-[#e5e5e5] '>
            <a href={SC.URL} target='_blank'>{SC.icon}</a></li>
    })

  return (
<footer className=' bg-[linear-gradient(to_bottom,_#222,_#333)] p-8 text-white'>
   <div className='flex md:p-8 border-b-1 max-md:flex-col'> {/* Container */}

    <div className='flex flex-col md:w-[30%] max-md:text-center max-md:items-center'> {/* img & descrption */} 
        <a href="#" className='cursor-auto'><img src="/Artboard 1.png" alt="logo" className='w-[120px] cursor-pointer max-md:w-[150px]' /></a>
        <p className='md:max-w-[70%] '>Fixing phones, saving time, and putting smiles back in your hands.</p>
    </div>
    {/* Loop over Services */}
    <div className="grid md:grid-cols-5 md:gap-5 md:w-[70%] mt-4 max-md:mb-8 ">
        {servicesTitles}
    </div>
    </div> 

{/* Real footer */}
    <div className='flex items-center justify-between md:p-8 max-md:py-8 max-md:flex-col'>
        <span className='font-semibold max-md:mb-8 max-md:text-[15px]'>&copy; 2025 SAMobile LLC. All Rights Reserved.</span>
        <ul className='flex gap-4'>
            {SCMediaList}
        </ul>
        <span className='p-2 text-center rounded-2xl max-md:mt-8 bg-gradient-to-r from-stone-500 to-white via-neutral-400'>Made with ❤️ by <a href="https://github.com/Eyup-16" target='_blank' className='font-bold text-[#444]'>Eyup</a></span>
    </div>
</footer>
  )
}

export default Footer
