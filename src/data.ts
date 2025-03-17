import React from "react"
import { PhoneCall,MapPin ,MessagesSquare,Mail,Instagram,Facebook,Github, Dribbble,Linkedin,Twitter
, Gauge,Hourglass,ShieldCheck,BadgeDollarSign,TabletSmartphone,CalendarClock,MessageSquareMore ,CreditCard
} from 'lucide-react'

// 01. Social Media Array inside the Contact.TSX

// Using : react.createElement() that its equivlant to JSX/TSX Syntax
export const smList=[ 
  {
    title:'Chat with us',
    descr:'Speak to our friendly team via live chat',
    links:[{
      icon:React.createElement(MessagesSquare,{size:'20px'}), // this is Equivlant to this:  <MessagesSquare size={'20px'} />,
      link:'#',
      linkName:'start a live chat'
    },{
      icon:React.createElement(Mail,{size:'20px'}), //<Mail size={'20px'} />,
      link:'mailto:samobile34@gmail.com',
      linkName:'Shoot us an Email'
    },{
      icon:React.createElement(Instagram,{size:'20px'}), //<Instagram size={'20px'} />,
      link:'https://www.instagram.com/samobile34',
      linkName:'Message us on Instagram'
    }]
  },
  {
    title:'Call us',
    descr:'Call our Team Sat-Thu from 9 am to 9 pm',
    links:{
      icon:React.createElement(PhoneCall,{size:'20px'}), //<PhoneCall size={'20px'} />,
      link:'tel:+213541783626',
      linkName:'+213 (541)-78-3626'
    }
  },
  {
    title:'Visit us',
    descr:'chat to us in person at our BBA HQ',
    links:{
      icon:React.createElement(MapPin,{size:'20px'}), //<MapPin size={'20px'} />,
      link:'https://www.google.com/maps/place/Samobile/@36.0733942,4.752814,17z/data=!3m1!4b1!4m6!3m5!1s0x128cbd1ececcb1e9:0x43c4431db169a4da!8m2!3d36.07339!4d4.7574274!16s%2Fg%2F11rxydl9vg?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D',
      linkName:'laGraf street, Bordj Bou Arreridj VIC 34'
    }
  },
]

// 02. Services Array inside the Footer.TSX

export const serviceObj =[
        {
          id:1,
          title: 'Services',
          links:['Overview', 'Repairs', 'Sell Your Phone', 'Warranty', 'Pricing', 'FAQs'],  
        },
        {
          id:2,
          title: 'Company',
          links:['About Us', 'Careers', 'Press', 'Sustainability', 'Partners', 'Contact'],  
        },
        {
          id:3,
          title: 'Ressources',
          links:['Repair Tips', 'Sell Guide', 'Troubleshooting', 'Blog', 'Videos', 'Support'],  
        },
        {
          id:4,
          title: 'Socials',
          links:['Twitter', 'Linkedin', 'Facebook', 'Instagram', 'Github', 'Dribbble'],  
        },
        {
          id:5,  
          title: 'Legal',
          links:['Privacy Policy', 'Terms of Service', 'Refund Policy', 'Warranty Terms', 'Accessibility', 'Sitemap'],  
        },
    ]

// 03. Icons Array inside the Footer.TSX

export const socialMediaIcons =[
        {
            icon:React.createElement(Twitter,{strokeWidth:1.75}), //<Twitter strokeWidth={1.75}/>,
            URL:'https://X.com'
        },
        {
            icon:React.createElement(Linkedin,{strokeWidth:1.75}), // <Linkedin strokeWidth={1.75}/>,
            URL:'https://linkedin.com'
        },
        {
            icon:React.createElement(Facebook,{strokeWidth:1.75}), //<Facebook strokeWidth={1.75}/>,
            URL:'https://facebook.com'
        },
        {
            icon:React.createElement(Instagram,{strokeWidth:1.75}), //<Instagram strokeWidth={1.75}/>,
            URL:'https://instagram.com'
        },
        {
            icon:React.createElement(Github,{strokeWidth:1.75}),// <Github strokeWidth={1.75}/>,
            URL:'https://github.com'
        },
        {
            icon:React.createElement(Dribbble,{strokeWidth:1.75}), //<Dribbble strokeWidth={1.75}/>,
            URL:'https://dribbble.com'
        }
    ]

// 04. Q&A Array of Objects inside the HelpCenter.JSX

export const QAObj = [
  {
      id:1,
      icon:React.createElement(Hourglass,{color:'#fff',className:''}), //<Hourglass className="w-5" color="#fff" />,
      question:'How long does a phone repair usually take?',
      answer:"Most repairs are completed within 1-2 hours. For more complex issues, we'll provide an estimated timeframe during the initial diagnosis."
  },
  {
      id:2,
      icon:React.createElement(ShieldCheck,{color:'#fff',className:'w-5'}),//<ShieldCheck className="w-5" color="#fff" />,
      question:'Do you offer a warranty on repairs?',
      answer:"Yes, we provide a 90-day warranty on all repairs to ensure your device stays in perfect condition."
  },
  {
      id:3,
      icon:React.createElement(BadgeDollarSign,{color:'#fff',className:'w-5'}),//<BadgeDollarSign className="w-5" color="#fff" />,
      question:'Can I sell a broken or damaged phone?',
      answer:"Absolutely! We buy phones in all conditions. Just let us know the issue, and we'll give you a fair price."
  },
  {
      id:4,
      icon:React.createElement(TabletSmartphone,{color:'#fff',className:'w-5'}),//<TabletSmartphone className="w-5" color="#fff" />,
      question:'What brands do you repair?',
      answer:"We repair all major brands, including Apple, Samsung, Google, and more. Check our Services section for a full list."
  },
  {
      id:5,
      icon:React.createElement(CalendarClock,{color:'#fff',className:'w-5'}),//<CalendarClock className="w-5" color="#fff" />,
      question:'Do I need an appointment for repairs?',
      answer:'Walk-ins are welcome, but we recommend booking online to save time and guarantee a slot.'
  },
  {
      id:6,
      icon:React.createElement(MessageSquareMore,{color:'#fff',className:'w-5'}),//<MessageSquareMore className="w-5" color="#fff" />,
      question:'How do I get a quote for my phone repair?',
      answer:'You can use our online quote tool or visit the store for a free, no-obligation assessment.'
  },
  {
      id:7,
      icon:React.createElement(CreditCard,{color:'#fff',className:'w-5'}),//<CreditCard className="w-5" color="#fff" />,
      question:'What payment methods do you accept?',
      answer:'We accept cash, credit/debit cards, and mobile payments like Apple Pay and Google Pay.'
  },
  {
      id:8,
      icon:React.createElement(Gauge,{color:'#fff',className:'w-5'}),//<Gauge className="w-5" color="#fff" />,
      question:'Do you offer same-day repairs?',
      answer:'Yes, most repairs are completed the same day. Contact us to confirm availability for your specific issue.'
  },
]


// 05. ProgressBar & Achivments Arrays of Objects inside the About.TSX

 export const progressList = [
      {
        name:'Building',
        value:.75
      },
      {
        name:'Deploying',
        value:.92
      },
      {
        name:'Publishing',
        value:.28
      },
    ]
 export const achievmentsList=[
      {
        name: '1000+',
        descr:'Phone Repaired'
      },
      {
        name: '20+',
        descr:'Years of experience'
      },
      {
        name: '300+',
        descr:'Satisfied client'
      },
      {
        name: '68',
        descr:'Certified Award'
      },
    ]
