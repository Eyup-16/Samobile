
import { User,ShoppingCart } from 'lucide-react';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar() {
    
    // State to manage the navbar's visibility
    const [nav, setNav] = useState(false);
    
    // Toggle function to handle the navbar's display
    const handleNav = () => {
        setNav(!nav);
    };
    
      // Array containing navigation items
      const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
      ];
      
      return (
        <nav className=' fixed top-0 left-0 w-full z-50  flex justify-between items-center h-24  mx-auto px-4 text-[#e5e5e5]'>

          {/* Logo */}
          <a href="#"><img src="/Artboard 1xxxhdpi.png" alt="No logo" className='w-[130px]'/></a>   

          {/* Desktop Navigation */}
          <ul className='hidden md:flex'>
            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 hover:bg-amber-500 rounded-xl m-2 cursor-pointer duration-300 hover:text-white'
              >
                {item.text}
              </li>
            ))}
          </ul>
      
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block md:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
      
          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
            {/* <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1> */}
          <a href="#">
          <img src="/sam-logo-Modern.png" alt="No logo" className='w-[130px] m-4'/>
          </a>
      
            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                {item.text}
              </li>
            ))}
          </ul>
        </nav>
      );

}

export default NavBar
