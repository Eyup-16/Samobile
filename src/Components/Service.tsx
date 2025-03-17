import React from 'react'
import { ServiceCards } from './Cards';
import { Element } from 'react-scroll';
import { servicesObj } from '../data'; 
function Services() {
  // fn to create cards by mapping over the `servicesObj` Array 
  const servicesCard =servicesObj.map((service)=> {
   return <ServiceCards key={service.id} icon={service.Icon} header={service.Header} desc={service.Description} btn={service.Button} />
  })
  
  return (
    <section className='bg-[linear-gradient(to_bottom,_#222,_#333)] relative p-8 text-center'>
      <Element name='Services'></Element>
      <div className="text-center">

<h1 className='text-4xl max-md:text-3xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block max-md:mb-6'>Our Services</h1>
<span className="text-[18px] max-md:text-[16px] font-semibold text-[#CACBCD]  cursor-pointer block">
    Find the Service you looking for!</span>
    </div>
    {/* Services Cards */}
        <div className="grid items-center p-4 mt-4 xl:grid-cols-3 lg:grid-cols-2 justify-items-center hide-last-xl">
      {servicesCard}
      </div>
    </section>
  )
}

export default Services
