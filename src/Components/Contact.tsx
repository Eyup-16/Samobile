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
    <div className='grid grid-cols-2 gap-4 max-w-[800px] justify-items-center m-auto text-white'>

    {/* form */}
    <form className='form'>
    {/* name */}
    <div className='name'>

      <div className='first name'>
      <label>First Name</label>
      <input type="text" placeholder='First Name' />
      </div>

      <div className='last name'>
      <label>Last Name</label>
      <input type="text" placeholder='Last Name' />
      </div>
    </div>

    <div className="email">
    <label>Email</label>
    <input type="email" placeholder='you@company.com' />
    </div>
    <div className="number">
    <label>Phone Number</label>
    <input type="number" placeholder='+1(555) 000-0000' />
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
