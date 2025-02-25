
import { User,ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function NavBar() {
    
    // State to manage the navbar's visibility
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
        if (window.scrollY > 120 && navStyle !== "bg-white/10 backdrop-blur-md") {
          setNavStyle("bg-white/10 backdrop-blur-md"); // Blur effect after 200px
        }
        if (window.scrollY <= 120 && navStyle !== "bg-transparent") {
          setNavStyle("bg-transparent"); // Reset to transparent when scrolling up
        }
      }
  
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [navStyle,handleNav]);
  


    
      // Array containing navigation items
      const navItems = [
        { id: 1, text: 'Home' },
        { id: 2, text: 'Company' },
        { id: 3, text: 'Resources' },
        { id: 4, text: 'About' },
        { id: 5, text: 'Contact' },
      ];
      
      return (
        <nav className={` bg-fixed fixed top-0 left-0 w-full z-50  flex justify-between
         items-center h-24  mx-auto px-4 text-[#e5e5e5] ${navStyle}`}>

          {/* Logo */}
          <a href="#"><img src="/Artboard 1.png" alt="No logo" className='w-[130px]'/></a>   

          {/* Desktop Navigation */}
          <ul className='hidden min-[896px]:flex'>
            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 m-2 cursor-pointer span'
              >
                {item.text}
              </li>
            ))}
          </ul>
      
          {/* Mobile Navigation Icon */}
          <div onClick={handleNav} className='block min-[896px]:hidden cursor-pointer'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
      
          {/* Mobile Navigation Menu */}
          <ul
            className={
              nav
                ? 'fixed min-[896px]:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#222120] ease-in-out duration-500'
                : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
            }
          >
            {/* Mobile Logo */}
          <a href="#">
          <img src="/Artboard 1.png" alt="No logo" className='w-[130px] m-4'/>
          </a>
      
            {/* Mobile Navigation Items */}
            {navItems.map(item => (
              <li
                key={item.id}
                className='p-4 border-b rounded-xl hover:bg-[#1B3A4B] duration-300 hover:text-black cursor-pointer border-gray-600'
              >
                {item.text}
              </li>
            ))}
          </ul>
        </nav>
      );

}

export default NavBar
