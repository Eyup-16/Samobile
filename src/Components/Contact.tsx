import React, { useRef ,useState} from 'react'
import { PhoneCall,MapPin ,MessagesSquare,Mail,Instagram} from 'lucide-react'
import { Element } from 'react-scroll';
function Contact() {
  
  //  State Variables
  const [services, setServices] =useState({
    'Phone Repair': false,
    'Unlock devices': false,
    'Sell & Buy': false,
    'Review device': false,
    'Phone compare': false,
    'Other': false,
  });

  const [firstName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [message,setMessage] = useState('')
  const [error,setError] = useState('')


console.log(firstName);

  // after clicking send message
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents the default form submission behavior
    alert('Message sent ✅');
    clearCheckboxes()
    clearInputs()
  };

  // Handle checkbox change
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setServices((prevServices) => ({
      ...prevServices,
      [name]: checked,
    }));
  };
  // Clear all checkboxes
  const clearCheckboxes = () => {
    setServices({
      'Phone Repair': false,
      'Unlock devices': false,
      'Sell & Buy': false,
      'Review device': false,
      'Phone compare': false,
      'Other': false,
    });
  };

  const clearInputs = ()=> {
    setEmail('')
    setFirstName('')
    setLastName('')
    setPhoneNumber('')
    setMessage('')
  }

  return (
    <section className=' bg-[#212121] p-8'>
            <Element name='Contact'></Element>
        {/* Header + description */}
        <div className="text-center">

    <h1 className='text-4xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block'>Contact Us</h1>
    <span className="text-[18px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Let us know how we can help.</span>
        </div>

    {/* Container */}
    <div className='grid grid-cols-2 gap-4 justify-items-center m-auto text-white p-8 mt-8 max-w-[1000px]'>

    {/* form */}
    <form onSubmit={handleSubmit} className='form'>
    {/* name */}
    <div className='grid grid-cols-2 gap-2 mb-[16px]'>

      <div className='flex flex-col '>
      <label htmlFor='firsName' className='mb-[10px] ml-[8px]'>First Name</label>
      <input type="text" name='firsName' placeholder='First Name' value={firstName} required
             className='input w-[80%]' onChange={(e)=>setFirstName(e.target.value.toUpperCase())}/>
      </div>

      <div className='flex flex-col'>
      <label htmlFor='lastName' className='mb-[10px] ml-[8px]'>Last Name</label>
      <input type="text" placeholder='Last Name' value={lastName} required
             className='input w-[80%]' onChange={(e)=>setLastName(e.target.value)} />
      </div>
    </div>

    <div className="flex flex-col mb-10">
    <label htmlFor='email' className='mb-[8px] ml-[8px]'>Email</label>
    <input type="email" placeholder='you@company.com' value={email} required
           className='w-[90%] input' onChange={(e)=>setEmail(e.target.value)} />
    </div>
    <div className="flex flex-col mb-10">
    <label htmlFor='phoneNumber' className='mb-[10px] ml-[8px]'>Phone Number</label>
    <input type="number" placeholder='+1(555) 000-0000' value={phoneNumber}
           className='w-[90%] input [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                      [&::-webkit-inner-spin-button]:appearance-none ' onChange={(e)=>setPhoneNumber(e.target.value)}/>
    </div>
    
    <div className="flex flex-col mb-10">
    <label htmlFor='message' className='mb-[10px] ml-[8px]'>Message</label>
    <textarea name="message" id="message" placeholder='Leave us a message' value={message} required
              className='w-[90%] resize-none overflow-hidden h-[100px] input'
              onChange={(e)=>{
                setMessage(e.target.value)
                setError(e.target.value.includes('@')?'':'Invalid Email')
              }
              }></textarea>
    </div>
    <div className="lex flex-col mb-10">
    <label htmlFor='services' className='mb-[10px] ml-[8px] block'>Services</label>
    <div className='grid grid-cols-2 gap-2 w-[80%]'>
    {Object.entries(services).map(([service, isChecked]) => (
          <div key={service}>
            <input
              type="checkbox"
              name={service}
              checked={isChecked}
              onChange={handleCheckboxChange}
              className='mr-2 cursor-pointer'
            /> 
            {service}
          </div>
        ))}
    </div>

    </div>
    <button className=' px-4 py-2 bg-white text-black text-center border-none rounded-[6px] 
                        cursor-pointer hover:bg-[#e8e8e8] transition-all duration-300 w-[90%] font-semibold'>
                        Send a Message</button>
    </form>

    {/* social media & phone */}
    <aside>
      <div className='mb-4'>
        <h3 className='font-semibold text-[24px] mb-[10px]'>Chat with us</h3>
        <p className='text-[14px] mb-[14px] text-gray-200'>Speak to our friendly team via live chat</p>
        <div className='flex gap-2 py-2 items-center'>
        <MessagesSquare size={'20px'} />
        <a href="#" className='font-[600] border-b-1 text-[14px]'>start a live chat </a>
        </div>
        <div className='flex gap-2 py-2 items-center'>
        <Mail size={'20px'} />
        <a href="mailto:samobile34@gmail.com" className='font-[600] border-b-1 text-[14px]'>Shoot us an Email </a>
        </div>

        <div className='flex gap-2 py-2 items-center'>
        <Instagram size={'20px'} />
        <a href="https://www.instagram.com/samobile34" target='_blank' className='font-[600] border-b-1 text-[14px]'>Message us on Instagram</a>
        </div>
      </div>

      <div className='mb-4'>
      <h3 className='font-semibold text-[24px] mb-[10px]'>Call us</h3>
      <p className='text-[14px] mb-[14px] text-gray-200'>Call our Team Sat-Thu from 9 am to 9 pm</p>
      <div className='flex gap-2 py-2 items-center'>
        <PhoneCall size={'20px'} />
        <a href="tel:+213541783626" className='font-[600] border-b-1 text-[14px]'>+213 (541)-78-3626</a>
        </div>
      </div>
      <div className='mb-4'>
      <h3 className='font-semibold text-[24px] mb-[10px]'>Visit us</h3>
      <p className='text-[14px] mb-[14px] text-gray-200'>chat to us in person at our BBA HQ</p>
      <div className='flex gap-2 py-2 items-center'>
       <MapPin size={'20px'} />
      <a href="https://www.google.com/maps/place/Samobile/@36.0733942,4.752814,17z/data=!3m1!4b1!4m6!3m5!1s0x128cbd1ececcb1e9:0x43c4431db169a4da!8m2!3d36.07339!4d4.7574274!16s%2Fg%2F11rxydl9vg?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D" target='_blank' className='font-[600] border-b-1 text-[14px]'>laGraf street, Bordj Bou Arreridj VIC 34 </a>
        </div>
      </div>
    </aside>

    </div>
    </section>
  )
}

export default Contact
