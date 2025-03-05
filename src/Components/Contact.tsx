import React from 'react'
import { PhoneCall,MapPin ,MessagesSquare,Mail,Instagram} from 'lucide-react'
function Contact() {
  return (
    <section className=' bg-[#212121] p-8'>
        {/* Header + description */}
        <div className="text-center">

    <h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Contact Us</h1>
    <span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Let us know how we can help.</span>
        </div>

    {/* Container */}
    <div className='grid grid-cols-2 gap-4 justify-items-center m-auto text-white p-8 mt-8'>

    {/* form */}
    <form className='form'>
    {/* name */}
    <div className='grid grid-cols-2 gap-2 mb-[16px]'>

      <div className='flex flex-col '>
      <label htmlFor='firsName' className='mb-[10px] ml-[8px]'>First Name</label>
      <input type="text" name='firsName' placeholder='First Name' 
             className='border-[1px] border-white rounded-[7px] pl-4 py-1 w-[80%] '/>
      </div>

      <div className='flex flex-col'>
      <label htmlFor='lastName' className='mb-[10px] ml-[8px]'>Last Name</label>
      <input type="text" placeholder='Last Name'
             className='border-[1px] border-white rounded-[7px] pl-4 py-1 w-[80%]' />
      </div>
    </div>

    <div className="flex flex-col mb-10">
    <label htmlFor='email' className='mb-[8px] ml-[8px]'>Email</label>
    <input type="email" placeholder='you@company.com'
           className='border-[1px] border-white rounded-[7px] pl-4 py-1 w-[80%]' />
    </div>
    <div className="flex flex-col mb-10">
    <label htmlFor='phoneNumber' className='mb-[10px] ml-[8px]'>Phone Number</label>
    <input type="number" placeholder='+1(555) 000-0000'
           className='border-[1px] border-white rounded-[7px] pl-4 py-1 w-[80%]' />
    </div>
    
    <div className="message">
    <label>Message</label>
    <textarea name="message" id="message" placeholder='Leave us a message'></textarea>
    </div>
    <div className="services"></div>
    <button>Send a Message</button>
    </form>

    {/* social media & phone */}
    <aside>
      <div className='chat'>
        <h3>Chat with us</h3>
        <p>Speak to our friendly team via live chat</p>
        <div className='social'>
        <MessagesSquare />
        <a href="#">start a live chat </a>
        </div>
        <div className='social'>
        <Mail />
        <a href="#">Shoot us an Email </a>
        </div>

        <div className='social'>
        <Instagram />
        <a href="#">Message us on X</a>
        </div>
      </div>

      <div className='call'>
      <h3>Call us</h3>
      <p>Call our Team Sat-Thu from 9am to 9pm</p>
      <div className='social'>
        <PhoneCall />
        <a href="#">+1 555 000-0000</a>
        </div>
      </div>
      <div className='visit'>
      <h3>Visit us</h3>
      <p>chat to us in person at our BBA HQ</p>
      <div className='social'>
       <MapPin />
        <a href="#">100 la Graph bba </a>
        </div>
      </div>
    </aside>

    </div>
    </section>
  )
}

export default Contact

// Next Step:
// 01. continue designing the contact page
// 02. start by the form flex ...
// 03. delete number adder in the input. 
