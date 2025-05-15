import React from 'react'
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function ShowCase() {
  return (
    <Element name='Home'>
      <section className='relative flex items-center justify-center min-h-screen text-white overflow-hidden'>
        <div className="absolute inset-0 bg-[url(/repearing.jpg)] bg-cover bg-center before:absolute before:inset-0 before:backdrop-blur-[2px] before:bg-gradient-to-b before:from-black/70 before:to-black/50"></div>
        
        <div className="relative flex justify-center w-full max-w-screen-xl px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col flex-wrap items-center max-w-3xl gap-4 text-center"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-[14px] font-semibold text-[#CACBCD] span cursor-pointer pb-2 tracking-wider"
            >
              YOUR TRUSTED PHONE EXPERTS
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className='relative text-[42px] max-md:text-3xl font-bold z-10 leading-tight max-w-[600px] mb-3 font-["Roboto",_serif]'
            >
              Repair, Sell, OR Upgrade Your Phone Today!
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='relative mb-3 text-xl text-gray-200 max-md:hidden leading-relaxed'
            >
              We specialize in fast, reliable phone repairs and offer top cash for your old devices. Whether you need a quick fix or want to upgrade, we've got you covered!
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className='relative mb-3 text-gray-200 max-md:text-[18px] md:hidden leading-relaxed'
            >
              We specialize in fast, reliable phone repairs and offer top cash for your old devices.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className='flex gap-4'
            >
              <button className="relative bg-white text-black px-8 max-md:px-6 py-3 rounded-lg font-semibold cursor-pointer mt-3 hover:bg-gray-100 transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                Get started
              </button>
              <button className="relative bg-black/80 backdrop-blur-sm text-white px-8 max-md:px-6 py-3 rounded-lg font-semibold cursor-pointer mt-3 hover:bg-black transition-all duration-300 w-fit shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 border border-white/20">
                Contact us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Element>
  )
}

export default ShowCase
