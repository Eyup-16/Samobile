import React from 'react'
import { Element } from 'react-scroll';
function ShowCase() {
  return (
      <Element name='Home'>
    <section className='relative flex items-center justify-center min-h-screen text-white'>
  <div className="absolute inset-0 bg-[url(/repearing.jpg)] bg-cover bg-center before:absolute before:inset-0 before:backdrop-blur-md before:bg-black/50"></div>
  
  <div className="relative flex justify-center w-full max-w-screen-xl px-4"> {/* Container for alignment */}
    <div className="flex flex-col flex-wrap items-center max-w-3xl gap-4 text-center"> {/* Flex parent for h1/p */}
      {/* <span></span> */}
      <span className="text-[14px] font-semibold text-[#CACBCD] span cursor-pointer pb-2"> {/* Small span above h1 */}
        YOUR TRUSTED PHONE EXPERTS
      </span>
      <h1 className='relative text-[38px] max-md:text-3xl  font-bold z-10  leading-tight max-w-[500px] mb-3 font-["Roboto",_serif]'> {/* Larger h1 */}
        Repair, Sell, OR Upgrade Your Phone Today!
      </h1>
      <p className='relative mb-3 text-xl text-gray-200 max-md:hidden'> {/* Descriptive paragraph */}
        We specialize in fast, reliable phone repairs and offer top cash for your old devices. Whether you need a quick fix or want to upgrade, we've got you covered!
      </p>
      <p className='relative mb-3 text-gray-200 max-md:text-[18px] md:hidden'> {/* Descriptive paragraph */}
        We specialize in fast, reliable phone repairs and offer top cash for your old devices.
      </p>
      <div className='flex gap-3'>
      <button className="relative bg-[#fff]  text-black px-8 max-md:px-6 py-3 rounded-lg font-semibold cursor-pointer mt-3 hover:bg-[#c9c6c6] transition-all duration-500 w-fit"> {/* Call-to-action button */}
        Get started 
      </button>
      <button className="relative bg-[#111]  text-white px-8 max-md:px-6 py-3 rounded-lg font-semibold cursor-pointer mt-3 hover:bg-[#393636] transition-all duration-500 w-fit"> {/* Call-to-action button */}
        Contact us
      </button>

      </div>
    </div>
  </div>
</section>
</Element>
  )
}

export default ShowCase
