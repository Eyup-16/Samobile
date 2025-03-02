import { Wrench } from "lucide-react"


function HelpCenter() {
  return (
    <section className=' bg-[#212121] p-8'>
        {/* Header + description */}
        <div className="text-center">

    <h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Help Center</h1>
    <span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Quick Answers to questions you may have.</span>
        </div>

    <div className="grid grid-cols-2 gap-4"> {/* Container of FAQs */} 
        <div className="qestion+ answer+ icon p-8"> {/* Container 01 of elements (icon,question,answer) flex is needed */}
            <div className="icon border-2 border-[#e5e5e5] rounded-[6px] w-8"><Wrench className="w-5" color="#fff"/></div>
            <h6>Is there a free trial available?</h6>
            <p>Yes you can try us for 30 days. if you want, we'll provide you with
                a free 30-min onboarding call to get you up & running.
            </p>
        </div>
        <div className="qestion+ answer+ icon p-8"> {/* Container 02 of elements (icon,question,answer) flex is needed */}
            <div className="icon border-2 border-[#e5e5e5] rounded-[6px] w-8"><Wrench className="w-5" color="#fff"/></div>
            <h6 className="font-bold text-white text-[16px] mb-2 ">Is there a free trial available?</h6>
            <p className="text-white text-[12px] w-[450px]">Yes you can try us for 30 days. if you want, we'll provide you with
                a free 30-min onboarding call to get you up & running.
            </p>
        </div>
    </div>
    </section>
  )
}

export default HelpCenter

// Next Step 
// 01 Continue styling the FAQs
// 02 after designing the fiv convert it into an array of objects then map over it 
// 03. try t ofind a gud palce to the mapped array (e.g `ServiceCards.jsx`)
