import React from 'react'
    function ServiceCards({icon,header,desc,btn}) {
        return (
      
          
            <div className='flex flex-col items-center justify-center bg-[#2d3436] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[350px] w-full mb-8'>
              <div className='m-4 p-3 bg-[#6c5ce7] rounded-full'> {/* Purple accent */}
                {icon}
              </div>
              
              <h1 className='text-2xl font-bold text-white mb-2 text-center'>{header}</h1> 
              <p className='text-sm text-gray-300 text-center mb-6 leading-relaxed'>{desc}</p>
              <button className='bg-[#6c5ce7] text-white px-8 py-3 rounded-lg font-medium 
                                hover:bg-[#5a4ad6] transition-colors duration-50 
                                transform hover:scale-105 text-sm'> {btn}
              </button>
            </div>
        )
      }
      

export default ServiceCards
