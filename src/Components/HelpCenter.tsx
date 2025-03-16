import React from "react";
import { HelpCards } from "./Cards"
import { QAObj } from "../data";
import { Element } from 'react-scroll';
function HelpCenter() {


    

    const helpcards = QAObj.map((question)=>{
      return  <HelpCards key={question.id} icon={question.icon} Q={question.question} A={question.answer} />
    })


  return (
    <section className=' bg-[linear-gradient(to_bottom,_#222,_#333)] p-8 [box-shadow:0_4px_10px_rgba(0,_0,_0,_0.5)]'>
              <Element name='Help Center'></Element>
        {/* Header + description */}
        <div className="text-center">

    <h1 className='text-4xl max-md:text-3xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Help Center</h1>
    <span className="md:text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Quick Answers to questions you may have.</span>
        </div>

    <div className="grid gap-4 mt-8 md:p-8 md:grid-cols-2 "> {/* Container of FAQs */} 
           {helpcards} 
    </div>
    </section>
  )
}

export default HelpCenter
