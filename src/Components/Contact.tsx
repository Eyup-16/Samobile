import React, {useState} from 'react'
import { Element } from 'react-scroll';
import { smList } from '../data';
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

// Functions 

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

  // Defining New Type (ONLY ON TypeScript)
  type InputProps = {
    id:number;
    name: string;
    label:string;
    type: string;
    placeholder: string;
    value: string;
    onchange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  };

  // Inputs code
  const inputList: InputProps[] =[ // : InputProps[] is to add TypeScript solidty into the code 
    // Check Errors Early
    {
      id:1,
      name:'firsName',
      label:'First Name',
      type:'text',
      placeholder:'First Name',
      value:firstName,
      onchange:(e)=>setFirstName(e.target.value.toUpperCase())
    },
    {
      id:2,
      name:'lastName',
      label:'Last Name',
      type:'text',
      placeholder:'Last Name',
      value:lastName,
      onchange:(e)=>setLastName(e.target.value)
    },
    {
      id:3,
      name:'email',
      label:'Email',
      type:'email',
      placeholder:'you@company.com',
      value:email,
      onchange:(e)=>setEmail(e.target.value)
    },
    {
      id:4,
      name:'phoneNumber',
      label:'Phone Number',
      type:'number',
      placeholder:'+1(555) 000-0000',
      value:phoneNumber,
      onchange:(e)=>setPhoneNumber(e.target.value)
    },
    {
      id:5,
      name:'message',
      label:'Message',
      type:'',
      placeholder:'Leave us a message',
      value:message,
      onchange:(e)=>setMessage(e.target.value)
    },]
    
  const commonClasses = 'w-[90%] input max-md:w-[100%]' // Repeted classes 
  // from 122 to 124 we devide the array into two SubArrays to generate `first & last names` under a specific div
  const twoFirstInputs = inputList.slice(0,2) // first & lastname inputs
  const remainingInputs = inputList.slice(2) // Rest of inputs

    // What we gonna render (instead of hard coded HTML)
  function renderedInput(input:any) {
    return(
      <div key={input.id} className="flex flex-col mb-10 max-md:mb-6">
    <label htmlFor={input.name} className='mb-[10px] ml-[8px]'>{input.label}</label>
    {/* check input's name if not equal to `message` it will generate an <input/> otherwise generate <textarea> */}
    {(input.name !== 'message')
    ?(<input id={input.name} type={input.type} placeholder={input.placeholder} value={input.value} required={input.type !== 'number'}
             className={`${input.name === 'firsName'|| input.name === 'lastName' ?'input w-[80%] max-md:w-[100%]':commonClasses} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none
                 [&::-webkit-inner-spin-button]:appearance-none`} onChange={input.onchange}/>)
    :(
      <textarea name={input.name} id={input.name} placeholder={input.placeholder} value={input.value} 
              required
              className={`${commonClasses} resize-none overflow-hidden h-[100px] `}
              onChange={input.onchange}></textarea>
    )
    }
    </div>
    )
  }

// social media contact 
const socialMedia = smList.map((item,indexItem)=>{
  return(
    <div className='mb-4 max-md:hidden' key={indexItem}> {/* input/textarea container */}
        <h3 className='font-semibold text-[24px] mb-[10px]'>{item.title}</h3>
        <p className='text-[14px] mb-[14px] text-gray-200'>{item.descr}</p>
        {/* check if `item.links`(from smList array) is an Array it will map over it & genrate all of its contains
         otherwise it will generate only one object (see on the smList array to understand more)    */}
        {Array.isArray(item.links)
        ?(
          item.links.map((link,index)=>(
            <div key={index} className='flex items-center gap-2 py-2'>
            {link.icon}
            <a  href={link.link} className='font-[600] border-b-1 text-[14px]'>{link.linkName}</a>
            </div>
          ))
        ):
        (
          <div key={indexItem} className='flex items-center gap-2 py-2'>
          {item.links.icon}
          <a  href={item.links.link} className='font-[600] border-b-1 text-[14px]'>{item.links.linkName}</a>
          </div>
        )}
        </div>
  )
})



  return (
    <section className=' bg-[linear-gradient(to_bottom,_#222,_#333)] p-8'>
            <Element name='Contact'></Element> {/* Element for smooth scrolling   */}
        {/* Header + description  Container*/}
    <div className="text-center">
    <h1 className='text-4xl max-md:text-3xl font-semibold text-[#CACBCD] text-center mb-8 py-2 border-b-2 inline-block max-md:mb-6'>Contact Us</h1>
    <span className="text-[18px] max-md:text-[16px] font-semibold text-[#CACBCD]  cursor-pointer block">
        Let us know how we can help.</span>
        </div>

    {/* Container of `form & aside` sections */}
    <div className='flex flex-col md:grid md:grid-cols-2 max-md:p-0  justify-items-center m-auto text-white p-8 mt-8 max-w-[1000px]'>

    {/* form of all input fields */}
    <form onSubmit={handleSubmit}>
    {/* first & last names Container */}
    <div className='grid grid-cols-2 gap-2 max-md:grid-cols-1 max-md:justify-center max-md:items-center '>
      {twoFirstInputs.map((input)=>renderedInput(input))}
    </div>
      {/* rest of inputs */}
      {remainingInputs.map((input)=>renderedInput(input))}
      {/* Services container */}
    <div className="flex flex-col mb-10">
    <label htmlFor='services' className='mb-[10px] ml-[8px] block'>Services</label>
    <div className='grid grid-cols-2 gap-2 w-[80%] max-md:flex max-md:flex-col'>
    {Object.entries(services).map(([service, isChecked]) => (
          <div key={service} className='flex items-center gap-3 max-md:mb-2'>
            <input
              type="checkbox"
              name={service}
              checked={isChecked}
              onChange={handleCheckboxChange}
            /> 
            {service}
          </div>
        ))}
    </div>
    </div>
    <button className=' px-4 py-2 bg-white text-black text-center border-none rounded-[6px] 
                        cursor-pointer hover:bg-[#c9c6c6] transition-all duration-500 w-[90%] 
                        font-semibold max-md:w-full'>Send a Message</button>
    </form>

    {/* social media & phone contact */}
    <aside>{socialMedia}</aside>
    </div>
    </section>
  )
}
export default Contact
