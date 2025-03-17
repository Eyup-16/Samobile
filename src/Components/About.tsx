import React ,{useState}from 'react'
import { Element } from 'react-scroll';
import { achievmentsList , progressList } from '../data';
function About() {
  const [email,setEmail] = useState('')
  const clearInput = ()=> {
   setEmail('')
  
  }

  // fn for submitting email on the <aside> tag
   const handleSubmit = (event: React.FormEvent) => {
      // event.preventDefault(); // Prevents the default form submission behavior
      // check if email is true (just dump verification :) )
      if (email !== '' && email.includes('@')) {
        alert('Submitted ✅');
      }else{
        alert('Please Enter Correct Email')
      }
      clearInput()
    
    };
    
    // fn generates progress bar 
    const progressBars = progressList.map((item:any,index)=> 
      (
        <div key={index} className='flex flex-col mb-6'>
          <span className='text-[#e5e5e5] mb-2'>{item.name}</span>
          <progress className='block h-1 rounded-[6px] w-full' value={item.value} />
          </div>
      )
    )
    
    // fn generates achievments
    const achievmentsItems = achievmentsList.map((achievment:any ,index)=> (
      <div key={index} className='flex flex-col my-4 text-center items-center max-md:bg-[linear-gradient(to_right,_#222,_#ccc)] p-2 rounded-[6px]'>
          <h1 className='text-5xl md:mb-2 max-md:text-4xl'>{achievment.name}</h1>
          <span className='text-[14px]'>{achievment.descr}</span>
        </div>
    ))

  return (
    <section className=' bg-[linear-gradient(to_bottom,_#222,_#333)] p-8'>
      <Element name='About'></Element>
    {/* Header + description */}
    <div className="mb-4 text-center">
      <h1 className='text-4xl max-md:text-3xl font-semibold text-[#CACBCD] text-center mb-6 py-2 border-b-2 inline-block'>About Our Store</h1>
      <span className="md:text-[18px] font-semibold text-[#CACBCD] cursor-pointer block">
        See how we began & Who our team is.</span>
    </div>

    <article className='md:p-16 max-md:mt-8 flex  justify-center gap-4 border-b-1 py-4 place-items-center  text-white max-w-[1200px]'>
      <img className='max-md:hidden w-[450px] rounded-[10px] mr-8 box-shadow:rgba(0, 0, 0, 0.35) 0px 5px 15px;' src="/aa.jpg" alt="repairing" />
      <div className='flex flex-col md:max-w-[300px] max-md:w-full'>
        <span className='text-[18px] font-semibold text-[#CACBCD]  cursor-pointer max-md:hidden mb-3'>About Us</span>
        <h1 className='text-4xl max-md:text-2xl  text-[#CACBCD] font-[500] mb-4'>We Always Make the best</h1>
        <p className='text-[14px] mb-3 max-md:mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, magnam 
           fugiat unde expedita ea dolores!  commodi facere.</p>
        <button className='px-4 py-2 bg-white text-black text-center border-none rounded-[6px] 
                        cursor-pointer hover:bg-[#c9c6c6] transition-all duration-500 font-semibold w-[50%]'>Book a Session</button>
      </div>
    </article>


    <article className='md:p-16 max-md:mt-8 flex  max-md:flex-col justify-center gap-4 md:place-items-center text-white max-w-[1200px]'>
      <div className='md:w-[50%]'>
        <h1 className='text-2xl  text-[#CACBCD] font-[500] mb-3'>Our Skills</h1>
        <p className='text-[14px] md:max-w-[70%] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem exceptur
          i modi earum quam totam fugit unde nobis eius explicabo.</p>
        <div className='flex max-md:hidden flex-col max-w-[65%] '> {/* Progress bars */}
          {progressBars}
        </div>
      </div>

      <div className="grid-cols-2 gap-16 md:grid">  {/* Achievments */}
        {achievmentsItems}
      </div>

    </article>
    {/* Join US file */}
    <aside className='flex max-md:flex-col justify-between items-center bg-[linear-gradient(to_right,_#111,_#222)] p-8 rounded-2xl'>
     <div className='flex flex-col justify-center'>
      <h1 className='text-2xl max-md:text-[18px] font-[500] text-[#eee] mb-2'>Join Our Weekly Newsletter</h1>
      <p className='text-[#ddd] max-md:text-[14px]'>Stay up to date with the latest news, announcements, and articles.</p>
     </div>

     <form className='flex items-center border border-[#ccc] w-fit rounded-[10px] pl-3 bg-white mt-4'>
    <input
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="email"
      placeholder='Enter your email'
      className='border-none rounded-[6px] focus:outline-none md:w-64 max-md:w-38'
      required
    />
    <button
      className='px-4 py-2 bg-[linear-gradient(to_right,_#222,_#333)] text-white text-center border-none rounded-[10px] 
                cursor-pointer hover:bg-[linear-gradient(to_right,_#333,_#222)] transition-all duration-800 font-semibold'
      onClick={handleSubmit}
    >
      Subscribe
    </button>
  </form>
    </aside>
</section>
  )
}

export default About
