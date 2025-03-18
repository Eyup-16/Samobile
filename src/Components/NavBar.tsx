import React, { useState, useEffect } from 'react';
import { navItems } from '../data';
import { Menu,X } from 'lucide-react';
import {Link} from 'react-scroll'
function NavBar() {
    
    // State to manage the navbar's Mobile visibility
    const [nav, setNav] = useState(false);
    // Toggle function to handle the navbar's display
    const [navStyle, setNavStyle] = useState("bg-transparent");
    

    const handleNav = () => {
        setNav(!nav);
        setNavStyle('bg-transparent')
    };
    // change navBar background depends on scroll
    useEffect(() => {
      function handleScroll() {
        if (window.scrollY > 120 && navStyle !== "bg-white/10 backdrop-blur-md" && !nav) {
          setNavStyle("bg-white/10 backdrop-blur-md"); // Blur effect after 120px
        }
        if (window.scrollY <= 120 && navStyle !== "bg-transparent") {
          setNavStyle("bg-transparent"); // Reset to transparent when scrolling up
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [navStyle]);
  
         
      
      return (
        // NavBar Container
        <nav className={` bg-fixed fixed top-0 left-0 w-full z-50  flex justify-between
         items-center h-24  mx-auto px-4 text-[#e5e5e5] ${navStyle}`}>

          {/* Logo */}
          <Link to='Home' smooth={true} duration={500}>
          <img src="/Artboard 1.png" alt="No logo" className='w-[130px] cursor-pointer'/>  
            </Link>

          {/* Desktop Navigation */}
          <ul className='hidden min-[896px]:flex'>
            {navItems.map(item => (
              <Link to={item.text} smooth={true} duration={500}>
              <li key={item.id} className='px-4 py-2 m-2 cursor-pointer span'>
                {item.text} </li>
                </Link>
            ))}
          </ul>
      
          {/* Mobile Navigation Icon */}
          <button 
            aria-label={nav ? "Close menu" : "Open menu"}
            onClick={handleNav}
            className="block min-[896px]:hidden cursor-pointer">
            {nav ? <X size={20} /> : <Menu size={20} />}
          </button>
      
          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed min-[896px]:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#222120] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo with Scroll behavior to the Home section */}

            <Link to='Home' smooth={true} duration={500}>
          <img src="/Artboard 1.png" alt="No logo" className='w-[130px] m-4 cursor-pointer'/>
            </Link>
    
      
            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <Link to={item.text} smooth={true} duration={500}> {/* For Smooth Scrolling by targeting the whole `li` tag  */} 
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-[#ddd] duration-500 hover:text-black cursor-pointer border-[#ddd]'
              >
                {item.text}
              </li>
              </Link>
            ))}
          </ul>
        </nav>
      );

}

export default NavBar
