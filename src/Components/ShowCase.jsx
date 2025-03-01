import React from 'react'

function ShowCase() {
  return (
    <section className='relative min-h-screen flex items-center justify-center text-white shadow-[inset_0px_2px_4px_0px_rgba(0,_0,_0,_0.3)]'>
  <div className="absolute inset-0 bg-[url(/repearing.jpg)] bg-cover bg-center before:absolute before:inset-0 before:backdrop-blur-md before:bg-black/50"></div>
  
  <div className="relative w-full max-w-screen-xl px-4 flex justify-center"> {/* Container for alignment */}
    <div className="flex gap-4 flex-wrap flex-col max-w-3xl text-center items-center "> {/* Flex parent for h1/p */}
      <span></span>
      <span className="text-[14px] font-semibold text-[#CACBCD]  span"> {/* Small span above h1 */}
        YOUR TRUSTED PHONE EXPERTS
      </span>
      <h1 className='relative text-[38px] font-bold z-10  leading-tight max-w-[500px] mb-3 font-["Roboto",_serif]'> {/* Larger h1 */}
        Repair, Sell, OR Upgrade Your Phone Today!
      </h1>
      <p className='relative text-xl  text-gray-200 mb-3'> {/* Descriptive paragraph */}
        We specialize in fast, reliable phone repairs and offer top cash for your old devices. Whether you need a quick fix or want to upgrade, we've got you covered!
      </p>
      <button className="relative bg-[#1B3A4B] text-white px-8 py-3 rounded-lg font-semibold cursor-pointer mt-3 hover:bg-[#264653] transition-colors duration-300 w-fit"> {/* Call-to-action button */}
        Get Started Now
      </button>
    </div>
  </div>
</section>
  )
}

export default ShowCase
