import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { smList } from '../data';
import { motion } from 'framer-motion';

function Contact() {
    // State Variables
    const [services, setServices] = useState({
        'Phone Repair': false,
        'Unlock devices': false,
        'Sell & Buy': false,
        'Review device': false,
        'Phone compare': false,
        'Other': false,
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    // Functions 
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        alert('Message sent ✅');
        clearCheckboxes();
        clearInputs();
    };

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, checked } = event.target;
        setServices((prevServices) => ({
            ...prevServices,
            [name]: checked,
        }));
    };

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

    const clearInputs = () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setPhoneNumber('');
        setMessage('');
    };

    type InputProps = {
        id: number;
        name: string;
        label: string;
        type: string;
        placeholder: string;
        value: string;
        onchange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    };

    const inputList: InputProps[] = [
        {
            id: 1,
            name: 'firsName',
            label: 'First Name',
            type: 'text',
            placeholder: 'First Name',
            value: firstName,
            onchange: (e) => setFirstName(e.target.value.toUpperCase())
        },
        {
            id: 2,
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Last Name',
            value: lastName,
            onchange: (e) => setLastName(e.target.value)
        },
        {
            id: 3,
            name: 'email',
            label: 'Email',
            type: 'email',
            placeholder: 'you@company.com',
            value: email,
            onchange: (e) => setEmail(e.target.value)
        },
        {
            id: 4,
            name: 'phoneNumber',
            label: 'Phone Number',
            type: 'number',
            placeholder: '+1(555) 000-0000',
            value: phoneNumber,
            onchange: (e) => setPhoneNumber(e.target.value)
        },
        {
            id: 5,
            name: 'message',
            label: 'Message',
            type: '',
            placeholder: 'Leave us a message',
            value: message,
            onchange: (e) => setMessage(e.target.value)
        },
    ];

    const commonClasses = 'w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all duration-300';
    
    const twoFirstInputs = inputList.slice(0, 2);
    const remainingInputs = inputList.slice(2);

    function renderedInput(input: any) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                key={input.id}
                className="flex flex-col mb-6 max-md:mb-4"
            >
                <label htmlFor={input.name} className='mb-2 ml-2 text-gray-300'>{input.label}</label>
                {input.name !== 'message' ? (
                    <input
                        id={input.name}
                        type={input.type}
                        placeholder={input.placeholder}
                        value={input.value}
                        required={input.type !== 'number'}
                        className={`${commonClasses} [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none`}
                        onChange={input.onchange}
                    />
                ) : (
                    <textarea
                        name={input.name}
                        id={input.name}
                        placeholder={input.placeholder}
                        value={input.value}
                        required
                        className={`${commonClasses} resize-none h-[120px]`}
                        onChange={input.onchange}
                    />
                )}
            </motion.div>
        );
    }

    const socialMedia = smList.map((item, indexItem) => (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: indexItem * 0.1 }}
            className='mb-6'
            key={indexItem}
        >
            <h3 className='font-semibold text-xl md:text-2xl mb-3 text-white'>{item.title}</h3>
            <p className='text-sm mb-4 text-gray-300'>{item.descr}</p>
            {Array.isArray(item.links) ? (
                item.links.map((link, index) => (
                    <motion.div
                        whileHover={{ x: 5 }}
                        key={index}
                        className='flex items-center gap-3 py-2 group'
                    >
                        <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                            {link.icon}
                        </span>
                        <a href={link.link} className='font-medium text-sm text-gray-300 hover:text-white transition-colors duration-300'>
                            {link.linkName}
                        </a>
                    </motion.div>
                ))
            ) : (
                <motion.div
                    whileHover={{ x: 5 }}
                    className='flex items-center gap-3 py-2 group'
                >
                    <span className="text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.links.icon}
                    </span>
                    <a href={item.links.link} className='font-medium text-sm text-gray-300 hover:text-white transition-colors duration-300'>
                        {item.links.linkName}
                    </a>
                </motion.div>
            )}
        </motion.div>
    ));

    return (
        <section className='bg-gradient-to-b from-[#222] via-[#2a2a2a] to-[#333] p-6 md:p-12 relative overflow-hidden'>
            <Element name='Contact' />
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-3xl md:text-4xl font-bold text-white text-center mb-4'
                >
                    Contact Us
                </motion.h1>
                
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-6 md:mb-8"
                />
                
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-base md:text-[18px] font-medium text-gray-300 block"
                >
                    Let us know how we can help.
                </motion.span>
            </motion.div>

            <div className='flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 justify-items-center m-auto text-white p-4 md:p-8 mt-8 max-w-7xl'>
                <motion.form
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="w-full max-w-xl"
                >
                    <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                        {twoFirstInputs.map((input) => renderedInput(input))}
                    </div>
                    {remainingInputs.map((input) => renderedInput(input))}
                    
                    <div className="flex flex-col mb-8">
                        <label htmlFor='services' className='mb-3 ml-2 text-gray-300'>Services</label>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 w-full'>
                            {Object.entries(services).map(([service, isChecked]) => (
                                <motion.div
                                    whileHover={{ scale: 1.02 }}
                                    key={service}
                                    className='flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors duration-300'
                                >
                                    <input
                                        type="checkbox"
                                        name={service}
                                        checked={isChecked}
                                        onChange={handleCheckboxChange}
                                        className="w-4 h-4 rounded border-gray-300 text-white focus:ring-white/20"
                                    />
                                    <span className="text-gray-300">{service}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='w-full px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black rounded-lg 
                            font-semibold hover:from-gray-100 hover:to-gray-200 transition-all duration-300 
                            shadow-lg hover:shadow-xl'
                    >
                        Send a Message
                    </motion.button>
                </motion.form>

                <motion.aside
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-xl"
                >
                    {socialMedia}
                </motion.aside>
            </div>
        </section>
    );
}

export default Contact;
