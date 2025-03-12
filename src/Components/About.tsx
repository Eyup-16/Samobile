import React from 'react'
import { Element } from 'react-scroll';
function About() {
  return (
    <section className=' bg-[#212118] p-8'>
      <Element name='About'></Element>
    {/* Header + description */}
    <div className="text-center">
      <h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>About Our Store</h1>
      <span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        See how we began & Who our team is.</span>
    </div>

    <article className='p-16 flex justify-center gap-4  place-items-center text-white max-w-[1200px]'>
      <img className='w-[450px] rounded-[10px] mr-8 box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;' src="/aa.jpg" alt="repairing" />
      <div className='flex flex-col max-w-[300px]'>
        <span className='text-[18px] font-semibold text-[#CACBCD]  cursor-pointer  mb-3'>About Us</span>
        <h1 className='text-4xl  text-[#CACBCD] font-[500] mb-4'>We Always Make the best</h1>
        <p className='text-[14px] mb-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, magnam 
           fugiat unde expedita ea dolores!  commodi facere.</p>
        <button className='px-4 py-2 bg-white text-black text-center border-none rounded-[6px] 
                        cursor-pointer hover:bg-[#e8e8e8] transition-all duration-300 font-semibold w-[50%]'>Book a Session</button>
      </div>
    </article>
    <article className='p-16 flex justify-center gap-4  place-items-center text-white max-w-[1200px]'>
      <div className='w-[50%]'>
        <h1 className='text-2xl  text-[#CACBCD] font-[500] mb-3'>Our Skills</h1>
        <p className='text-[14px] max-w-[70%] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exceptur
          i modi earum quam totam fugit unde nobis eius explicabo.</p>
        <div className='flex flex-col max-w-[65%]'>
          <div className='mb-6 flex flex-col'>
          <span className='text-[#e5e5e5] mb-2'>Building</span>
          <progress className='block h-1 rounded-[6px] w-full' value={.75} />
          </div>

          <div  className='mb-6 flex flex-col'>
          <span className='text-[#e5e5e5] mb-2'>Deploying</span>
          <progress className='block h-1 rounded-[6px] w-full' value={.92} />
          </div>

          <div  className='mb-6 flex flex-col'>
          <span className='text-[#e5e5e5] mb-2'>Publishing</span>
          <progress className='block h-1 rounded-[6px] w-full text-amber-700' value={.65} />
          </div>
          
        </div>
      </div>

      <div className="grid grid-cols-2 gap-16">
        <div className='flex flex-col text-center'>
          <h1 className='text-5xl mb-2'>1000+</h1>
          <span className='text-[14px]'>Phone Repaired</span>
        </div>

         <div className='flex flex-col text-center'>
          <h1 className='text-5xl mb-2'>20+</h1>
          <span className='text-[14px]'>Years of experience</span>
        </div>
        <div className='flex flex-col text-center'> 
          <h1 className='text-5xl mb-2'>300+</h1>
          <span className='text-[14px]'>Satisfied client</span>
        </div>
        <div className='flex flex-col text-center'>
          <h1 className='text-5xl mb-2'>68</h1>
          <span className='text-[14px]'>Certified Award</span>
          </div>
      </div>

    </article>

</section>
  )
}

export default About
