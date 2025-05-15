import React, { useState, useEffect } from 'react';
import { navItems } from '../data';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

function NavBar() {
    const [nav, setNav] = useState(false);
    const [navStyle, setNavStyle] = useState("bg-transparent");

    const handleNav = () => {
        setNav(!nav);
        setNavStyle('bg-transparent');
    };

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 120 && navStyle !== "bg-white/10 backdrop-blur-md" && !nav) {
                setNavStyle("bg-white/10 backdrop-blur-md shadow-lg");
            }
            if (window.scrollY <= 120 && navStyle !== "bg-transparent") {
                setNavStyle("bg-transparent");
            }
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [navStyle]);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center h-24 mx-auto px-4 text-[#e5e5e5] transition-all duration-300 ${navStyle}`}>
            <Link to='Home' smooth={true} duration={500} className="hover:opacity-80 transition-opacity">
                <img src="/Artboard 1.png" alt="Logo" className='w-[130px] cursor-pointer' />
            </Link>

            <ul className='hidden min-[896px]:flex items-center space-x-1'>
                {navItems.map(item => (
                    <Link key={item.id} to={item.text} smooth={true} duration={500}>
                        <li className='px-4 py-2 m-2 cursor-pointer relative group'>
                            {item.text}
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    </Link>
                ))}
            </ul>

            <button 
                aria-label={nav ? "Close menu" : "Open menu"}
                onClick={handleNav}
                className="block min-[896px]:hidden cursor-pointer hover:opacity-80 transition-opacity">
                {nav ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
                className={`fixed min-[896px]:hidden top-0 right-0 w-[75%] h-full bg-[#222120] transform transition-transform duration-500 ease-in-out ${
                    nav ? 'translate-x-0' : 'translate-x-full'
                } shadow-2xl`}
            >
                <div className="p-6">
                    <Link to='Home' smooth={true} duration={500} className="block mb-8">
                        <img src="/Artboard 1.png" alt="Logo" className='w-[130px] cursor-pointer hover:opacity-80 transition-opacity' />
                    </Link>

                    <ul className="space-y-4">
                        {navItems.map(item => (
                            <Link key={item.id} to={item.text} smooth={true} duration={500}>
                                <li className='p-4 rounded-xl hover:bg-white/10 transition-colors duration-300 cursor-pointer'>
                                    {item.text}
                                </li>
                            </Link>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
