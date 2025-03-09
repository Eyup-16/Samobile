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

    <article className='p-16 flex justify-center gap-4  place-items-center text-white max-w-[200px]: '>
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
    <article>
      <div className='skills'>
        <h1>Our Skills</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, illum!</p>
        <div className='flex flex-col'>
          <div>
          <span>Building</span>
          <progress className='block h-1 ' value={.75} />
          </div>
          <div>
          <span>Building</span>
          <progress className='block' value={.92} />
          </div>
          <div>
          <span>Building</span>
          <progress className='block' value={.65} />
          </div>
          
        </div>
      </div>

      <div className="statistics">
        <div>
          <h1>1000+</h1>
          <span>Phone Repaired</span>
        </div>
        <div>
          <h1>20+</h1>
          <span>Years of experience</span>
        </div>
        <div>
          <h1>300+</h1>
          <span>Satisfied client</span>
        </div>
        <div>
          <h1>68</h1>
          <span>Certified Award</span>
        </div>
      </div>

    </article>

</section>
  )
}

export default About
