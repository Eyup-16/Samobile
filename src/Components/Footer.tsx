import React from 'react'
import {Facebook,Github, Instagram, Dribbble,Linkedin,Twitter} from 'lucide-react'
function Footer() {

    const serviceObj =[
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

    const servicesTitles = serviceObj.map((service) =>{
        return(
            <div key={service.id}> {/* items container */}
        <h6 className='font-bold text-gray-400 mb-3 text-[14px]'>{service.title}</h6>
        <ul>
            {service.links.map((item)=>(<li key={item} className='mb-2'><a href="#" className=' hover:text-gray-300 transition-colors duration-200'>{item}</a></li>))}
        </ul>
    </div>
        )
    })


    const socialMediaIcons =[
        {
            icon:<Twitter strokeWidth={1.75}/>,
            URL:'https://X.com'
        },
        {
            icon:<Linkedin strokeWidth={1.75}/>,
            URL:'https://linkedin.com'
        },
        {
            icon:<Facebook strokeWidth={1.75}/>,
            URL:'https://facebook.com'
        },
        {
            icon:<Instagram strokeWidth={1.75}/>,
            URL:'https://instagram.com'
        },
        {
            icon:<Github strokeWidth={1.75}/>,
            URL:'https://github.com'
        },
        {
            icon:<Dribbble strokeWidth={1.75}/>,
            URL:'https://dribbble.com'
        }
    ]
    // SC is Social Media
    const SCMediaList = socialMediaIcons.map((SC)=>{
        return <li key={SC.URL} className='p-1 border-2 rounded-[6px] border-[#e5e5e5] '>
            <a href={SC.URL}>{SC.icon}</a></li>

    })

  return (
<footer className=' bg-[#212118] p-8 text-white'>
   <div className='flex p-8 border-b-1'> {/* Container */}

    <div className='flex flex-col w-[30%]'> {/* img & descrption */} 
        <a href="#" className='cursor-auto'><img src="/Artboard 1.png" alt="logo" className='w-[120px] cursor-pointer' /></a>
        <p className='max-w-[70%]'>Fixing phones, saving time, and putting smiles back in your hands.</p>
    </div>
    <div className="grid grid-cols-5 gap-5 w-[70%] mt-4">
        {servicesTitles}
    </div>
    </div> 

{/* Real footer */}
    <div className='p-8 flex justify-between items-center'>
        <span className='font-semibold'>&copy; 2025 SAMobile LLC. All Rights Reserved.</span>
        <ul className='flex gap-4'>
            {SCMediaList}
        </ul>
    </div>
</footer>
  )
}

export default Footer
