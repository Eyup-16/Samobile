import React from 'react'
import { serviceObj, socialMediaIcons } from '../data'
import { ChevronDown, Mail, Phone, MapPin } from 'lucide-react'
import { motion } from 'framer-motion'

function Footer() {
    const [openAccordions, setOpenAccordions] = React.useState({});

    const toggleAccordion = (id: number) => {
        setOpenAccordions((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const servicesTitles = serviceObj.map((service, index) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={service.id}
                className='w-full'
            >
                <input
                    type="checkbox"
                    className='invisible hidden peer'
                    id={`accordion-${service.id}`}
                    onChange={() => toggleAccordion(service.id)}
                />
                <label
                    htmlFor={`accordion-${service.id}`}
                    className="font-bold text-[#bbb] mb-4 text-[14px] max-md:text-[18px] max-md:items-center max-md:flex 
                    max-md:justify-between cursor-pointer hover:text-white transition-colors duration-300 group"
                >
                    <span className="relative">
                        {service.title}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <ChevronDown
                        size={20}
                        strokeWidth={1.5}
                        className={`md:hidden max-md:transition-transform max-md:duration-300 ${
                            openAccordions[service.id] ? 'max-md:rotate-180' : 'max-md:rotate-0'
                        }`}
                    />
                </label>
                <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                        height: openAccordions[service.id] ? 'auto' : 0,
                        opacity: openAccordions[service.id] ? 1 : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className='max-md:overflow-hidden peer-checked:max-md:h-auto'
                >
                    {service.links.map((item, linkIndex) => (
                        <motion.li
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: linkIndex * 0.1 }}
                            key={item}
                            className='mb-2'
                        >
                            <a
                                href="#"
                                className='text-gray-400 hover:text-white transition-colors duration-300 text-sm group/link flex items-center'
                            >
                                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-2 group-hover/link:bg-white transition-colors duration-300"></span>
                                {item}
                            </a>
                        </motion.li>
                    ))}
                </motion.ul>
            </motion.div>
        );
    });

    const SCMediaList = socialMediaIcons.map((SC, index) => (
        <motion.li
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            key={SC.URL}
            className='p-2 border-2 rounded-lg border-white/20 hover:border-white/40 transition-all duration-300 
                hover:shadow-lg hover:shadow-white/10 bg-white/5 hover:bg-white/10'
        >
            <a
                href={SC.URL}
                target='_blank'
                rel="noopener noreferrer"
                className='text-white/80 hover:text-white transition-colors duration-300'
            >
                {SC.icon}
            </a>
        </motion.li>
    ));

    const contactInfo = [
        {
            icon: <Phone size={20} />,
            text: "+1 (555) 000-0000",
            link: "tel:+15550000000"
        },
        {
            icon: <Mail size={20} />,
            text: "contact@samobile.com",
            link: "mailto:contact@samobile.com"
        },
        {
            icon: <MapPin size={20} />,
            text: "123 Tech Street, Digital City",
            link: "#"
        }
    ];

    return (
        <footer className='bg-gradient-to-b from-[#222] via-[#2a2a2a] to-[#333] p-8 text-white relative overflow-hidden'>
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className='flex md:p-8 border-b border-white/10 max-md:flex-col relative'>
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col md:w-[30%] max-md:text-center max-md:items-center'
                >
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="#"
                        className='cursor-pointer'
                    >
                        <img
                            src="/Artboard 1.png"
                            alt="logo"
                            className='w-[120px] cursor-pointer max-md:w-[150px] hover:opacity-90 transition-opacity duration-300'
                        />
                    </motion.a>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='md:max-w-[70%] text-gray-300 mt-4'
                    >
                        Fixing phones, saving time, and putting smiles back in your hands.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 space-y-3"
                    >
                        {contactInfo.map((info, index) => (
                            <motion.a
                                key={index}
                                href={info.link}
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300"
                            >
                                <span className="text-white/60">{info.icon}</span>
                                <span className="text-sm">{info.text}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid md:grid-cols-5 md:gap-5 md:w-[70%] mt-4 max-md:mb-8"
                >
                    {servicesTitles}
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex items-center justify-between md:p-8 max-md:py-8 max-md:flex-col relative'
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='font-semibold max-md:mb-8 max-md:text-[15px] text-gray-300'
                >
                    &copy; 2025 SAMobile LLC. All Rights Reserved.
                </motion.span>

                <motion.ul
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='flex gap-4'
                >
                    {SCMediaList}
                </motion.ul>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className='p-2 text-center rounded-2xl max-md:mt-8 bg-gradient-to-r from-stone-500 to-white via-neutral-400 
                        hover:from-stone-400 hover:to-gray-100 hover:via-neutral-300 transition-all duration-300
                        shadow-lg hover:shadow-xl'
                >
                    Made with ❤️ by{' '}
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://github.com/Eyup-16"
                        target='_blank'
                        rel="noopener noreferrer"
                        className='font-bold text-[#444] hover:text-[#222] transition-colors duration-300'
                    >
                        Eyup
                    </motion.a>
                </motion.div>
            </motion.div>
        </footer>
    );
}

export default Footer;
