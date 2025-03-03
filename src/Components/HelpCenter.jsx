import { Gauge,Hourglass,ShieldCheck,BadgeDollarSign,TabletSmartphone,CalendarClock,MessageSquareMore ,CreditCard} from "lucide-react"
import { HelpCards } from "./Cards"

function HelpCenter() {


    const QAObj = [
        {
            id:1,
            icon:<Hourglass className="w-5" color="#fff" />,
            question:'How long does a phone repair usually take?',
            answer:"Most repairs are completed within 1-2 hours. For more complex issues, we'll provide an estimated timeframe during the initial diagnosis."
        },
        {
            id:2,
            icon:<ShieldCheck className="w-5" color="#fff" />,
            question:'Do you offer a warranty on repairs?',
            answer:"Yes, we provide a 90-day warranty on all repairs to ensure your device stays in perfect condition."
        },
        {
            id:3,
            icon:<BadgeDollarSign className="w-5" color="#fff" />,
            question:'Can I sell a broken or damaged phone?',
            answer:"Absolutely! We buy phones in all conditions. Just let us know the issue, and we'll give you a fair price."
        },
        {
            id:4,
            icon:<TabletSmartphone className="w-5" color="#fff" />,
            question:'What brands do you repair?',
            answer:"We repair all major brands, including Apple, Samsung, Google, and more. Check our Services section for a full list."
        },
        {
            id:5,
            icon:<CalendarClock className="w-5" color="#fff" />,
            question:'Do I need an appointment for repairs?',
            answer:'Walk-ins are welcome, but we recommend booking online to save time and guarantee a slot.'
        },
        {
            id:6,
            icon:<MessageSquareMore className="w-5" color="#fff" />,
            question:'How do I get a quote for my phone repair?',
            answer:'You can use our online quote tool or visit the store for a free, no-obligation assessment.'
        },
        {
            id:7,
            icon:<CreditCard className="w-5" color="#fff" />,
            question:'What payment methods do you accept?',
            answer:'We accept cash, credit/debit cards, and mobile payments like Apple Pay and Google Pay.'
        },
        {
            id:8,
            icon:<Gauge className="w-5" color="#fff" />,
            question:'Do you offer same-day repairs?',
            answer:'Yes, most repairs are completed the same day. Contact us to confirm availability for your specific issue.'
        },
    ]

    const helpcards = QAObj.map((question)=>{
      return  <HelpCards key={question.id} icon={question.icon} Q={question.question} A={question.answer} />
    })


  return (
    <section className=' bg-[#212121] p-8'>
        {/* Header + description */}
        <div className="text-center">

    <h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Help Center</h1>
    <span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Quick Answers to questions you may have.</span>
        </div>

    <div className="grid grid-cols-2 gap-4"> {/* Container of FAQs */} 
           {helpcards} 
    </div>
    </section>
  )
}

export default HelpCenter
