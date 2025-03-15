import React from "react"
import { PhoneCall,MapPin ,MessagesSquare,Mail,Instagram,Facebook,Github, Dribbble,Linkedin,Twitter} from 'lucide-react'

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
