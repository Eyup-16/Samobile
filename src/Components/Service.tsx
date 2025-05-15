import React from 'react'
import { ServiceCards } from './Cards';
import { Element } from 'react-scroll';
import { servicesObj } from '../data'; 
import { motion } from 'framer-motion';

function Services() {
  // fn to create cards by mapping over the `servicesObj` Array 
  const servicesCard =servicesObj.map((service)=> {
   return <ServiceCards key={service.id} icon={service.Icon} header={service.Header} desc={service.Description} btn={service.Button} />
  })
  
  return (
      <Element name='Services'>
    <section className='bg-gradient-to-b from-[#222] via-[#2a2a2a] to-[#333] relative p-12 text-center overflow-hidden'>
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className='text-4xl max-md:text-3xl font-bold text-white text-center mb-4'
          >
            Our Services
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
          />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-[18px] max-md:text-[16px] font-medium text-gray-300 block"
          >
            Find the Service you're looking for!
          </motion.span>
        </motion.div>
      </div>
      {/* Services Cards */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="grid items-center p-4 mt-8 xl:grid-cols-3 lg:grid-cols-2 justify-items-center gap-8 max-w-7xl mx-auto"
      >
        {servicesCard}
      </motion.div>
    </section>
    </Element>
  )
}

export default Services
