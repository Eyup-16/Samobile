import React from 'react'
import {ServiceCards} from './Cards'
import { Wrench,KeyRound,DollarSign ,Cog   } from 'lucide-react';
import { Element } from 'react-scroll';
function Services() {
  const servicesObj = [
    {
      id:1,
      Icon:<Wrench className='text-black h-8 w-8'/>,
      Header:'Phone Repairs',
      Description:'Fix screens, batteries, charging ports & more. Fast, reliable, and affordable.',
      Button:'Learn More'
    },
    {
      id:2,
      Icon:<KeyRound className='text-black h-8 w-8'/>,
      Header:'Unlocking & Diagnostics',
      Description:'Unlock your phone & get a free diagnostic check. Quick and hassle-free.',
      Button:'Learn More'
    },
    {
      id:3,
      Icon:<DollarSign className='text-black h-8 w-8'/>,
      Header:'Buy, Sell & Trade-In',
      Description:'Sell your old phone or trade it in for a new one. Get instant cash or credit.',
      Button:'Learn More'
    },
    // {
    //   id:2,
    //   Icon:<Cog className='text-white h-8 w-8'/>,
    //   Header:'Accessories & Customization',
    //   Description:'Premium accessories & custom setups. Make your phone truly yours.',
    //   Button:'Learn More'
    // },
  ]
  const servicesCard =servicesObj.map((service)=> {
   return <ServiceCards key={service.id} icon={service.Icon} header={service.Header} desc={service.Description} btn={service.Button} />
  })
  
  return (
    <section className='bg-[linear-gradient(to_bottom,_#222,_#333)] relative p-8 text-center'>
      <Element name='Services'></Element>
      <div className="text-center">

<h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Our Services</h1>
<span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
    Find the Service you looking for!</span>
    </div>
      <div className="grid md:grid-cols-3 p-4  items-center justify-items-center mt-4">
     {servicesCard}
    </div>
    </section>
  )
}

export default Services
