import React from 'react'
import { motion } from 'framer-motion'

function ServiceCards({icon,header,desc,btn}) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -5 }}
            className='flex flex-col items-center justify-center bg-gradient-to-b from-[#2d3436] to-[#1e2224] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 max-w-[350px] w-full mb-8 border border-white/5'
        >
            <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className='m-4 p-4 bg-gradient-to-br from-white to-gray-100 rounded-full shadow-md'
            >
                {icon}
            </motion.div>
            
            <h1 className='mb-3 text-2xl font-bold text-center text-white'>{header}</h1> 
            <p className='mb-6 text-sm leading-relaxed text-center text-gray-300'>{desc}</p>
            <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-white to-gray-100 text-black px-8 py-3 rounded-lg font-medium 
                    hover:from-gray-100 hover:to-gray-200 transition-all duration-300 
                    shadow-md hover:shadow-lg text-sm w-full max-w-[200px]'
            >
                {btn}
            </motion.button>
        </motion.div>
    )
}

function HelpCards({icon,Q,A}) {
    return(
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center gap-6 py-6 md:items-center max-md:items-start max-md:flex-col bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
        >
            <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="icon bg-white/10 p-3 rounded-lg shadow-md"
            >
                {icon}
            </motion.div>
            
            <div className="flex flex-col gap-2"> 
                <h6 className="font-bold text-white text-lg max-md:text-[15px]">{Q}</h6>
                <p className="text-gray-300 text-[14px] md:w-[450px] leading-relaxed">{A}</p>
            </div>
        </motion.div>
    )
}

export {ServiceCards, HelpCards}
