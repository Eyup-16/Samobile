import React from 'react'
    function ServiceCards({icon,header,desc,btn}) {
        return (
      
    
            <div className='flex flex-col items-center justify-center bg-[#2d3436] p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-[350px] w-full mb-8'>
              <div className='m-4 p-3 bg-[#f5f5f5] rounded-full'> {/* Purple accent */}
                {icon}
              </div>
            
              <h1 className='text-2xl font-bold text-white mb-2 text-center'>{header}</h1> 
              <p className='text-sm text-gray-300 text-center mb-6 leading-relaxed'>{desc}</p>
              <button className='bg-[#fff] text-black px-8 py-3 rounded-lg font-medium 
                                hover:bg-[#e8e8e8] transition-colors duration-300 
                                transform hover:scale-105 text-sm'> {btn}
              </button>
            </div>
        )
      }
      

function HelpCards({icon,Q,A}) {
  return(
    <div className="flex items-center justify-center gap-4 py-4"> {/* Container 02 of elements (icon,question,answer) flex is needed */}
    <div className="icon border-1 border-[#e5e5e5] rounded-[6px] p-[5px] ">{icon}</div>
    
    <div className="flex flex-col"> {/* Container of Q & A To make flex */} 
    <h6 className="font-bold text-white text-[16px] mb-2 ">{Q}</h6>
    <p className="text-white text-[12px] w-[450px]">{A}</p>
    </div>
</div>
  )
export {
ServiceCards,
HelpCards
}
