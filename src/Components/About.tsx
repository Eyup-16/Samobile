import React, { useState } from 'react';
import { Element } from 'react-scroll';
import { achievmentsList, progressList } from '../data';
import { motion, AnimatePresence } from 'framer-motion';

function About() {
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const clearInput = () => {
        setEmail('');
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if (email !== '' && email.includes('@')) {
            setIsSubmitting(true);
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            setShowSuccess(true);
            setIsSubmitting(false);
            setTimeout(() => {
                setShowSuccess(false);
                clearInput();
            }, 3000);
        } else {
            alert('Please Enter Correct Email');
        }
    };

    const progressBars = progressList.map((item: any, index) => (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className='flex flex-col mb-6'
        >
            <div className="flex justify-between items-center mb-2">
                <span className='text-gray-300'>{item.name}</span>
                <span className='text-gray-400 text-sm'>{item.value}%</span>
            </div>
            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-gray-300"
                />
            </div>
        </motion.div>
    ));

    const achievmentsItems = achievmentsList.map((achievment: any, index) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={index}
            className='flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors duration-300'
        >
            <motion.h1
                whileHover={{ scale: 1.1 }}
                className='text-5xl md:mb-2 max-md:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent'
            >
                {achievment.name}
            </motion.h1>
            <span className='text-sm text-gray-300'>{achievment.descr}</span>
        </motion.div>
    ));

    return (
        <section className='bg-gradient-to-b from-[#222] via-[#2a2a2a] to-[#333] p-6 md:p-12 relative overflow-hidden'>
            <Element name='About' />
            
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl" />
            </div>
            
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-center max-w-4xl mx-auto mb-8 md:mb-12 relative"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className='text-3xl md:text-4xl font-bold text-white text-center mb-4'
                >
                    About Our Store
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
                    See how we began & Who our team is.
                </motion.span>
            </motion.div>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='md:p-16 max-md:mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-center text-white max-w-7xl mx-auto'
            >
                <motion.img
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='w-full md:w-[450px] rounded-xl shadow-2xl max-md:mb-6 hover:shadow-white/10 transition-shadow duration-300'
                    src="/aa.jpg"
                    alt="repairing"
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='flex flex-col w-full md:max-w-[400px] text-center md:text-left'
                >
                    <span className='text-lg font-medium text-gray-300 mb-3'>About Us</span>
                    <h1 className='text-3xl md:text-4xl text-white font-bold mb-4'>We Always Make the best</h1>
                    <p className='text-gray-300 mb-6 leading-relaxed'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui, magnam 
                        fugiat unde expedita ea dolores! commodi facere.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black rounded-lg 
                            font-semibold hover:from-gray-100 hover:to-gray-200 transition-all duration-300 
                            shadow-lg hover:shadow-xl w-fit mx-auto md:mx-0'
                    >
                        Book a Session
                    </motion.button>
                </motion.div>
            </motion.article>

            <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='md:p-16 max-md:mt-8 flex flex-col md:flex-row justify-center gap-8 md:gap-12 items-center text-white max-w-7xl mx-auto'
            >
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='w-full md:w-[50%] text-center md:text-left'
                >
                    <h1 className='text-2xl text-white font-bold mb-4'>Our Skills</h1>
                    <p className='text-gray-300 md:max-w-[70%] mb-8 leading-relaxed mx-auto md:mx-0'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem excepturi 
                        modi earum quam totam fugit unde nobis eius explicabo.
                    </p>
                    <div className='flex flex-col max-w-[65%] mx-auto md:mx-0'>
                        {progressBars}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full md:w-auto"
                >
                    {achievmentsItems}
                </motion.div>
            </motion.article>

            <motion.aside
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className='flex flex-col md:flex-row justify-between items-center bg-gradient-to-r from-[#111] to-[#222] p-6 md:p-8 rounded-2xl max-w-7xl mx-auto mt-8 md:mt-12'
            >
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='flex flex-col justify-center text-center md:text-left mb-6 md:mb-0'
                >
                    <h1 className='text-xl md:text-2xl font-bold text-white mb-3'>Join Our Weekly Newsletter</h1>
                    <p className='text-gray-300 text-sm md:text-base'>Stay up to date with the latest news, announcements, and articles.</p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='flex items-center bg-white/5 border border-white/10 rounded-lg overflow-hidden w-full md:w-auto'
                    onSubmit={handleSubmit}
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder='Enter your email'
                        className='border-none rounded-lg focus:outline-none bg-transparent text-white px-4 py-3 w-full md:w-64 placeholder-gray-400'
                        required
                        disabled={isSubmitting}
                    />
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className='px-6 py-3 bg-gradient-to-r from-white to-gray-100 text-black font-semibold 
                            hover:from-gray-100 hover:to-gray-200 transition-all duration-300 whitespace-nowrap
                            disabled:opacity-50 disabled:cursor-not-allowed'
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
                            />
                        ) : (
                            'Subscribe'
                        )}
                    </motion.button>
                </motion.form>
            </motion.aside>

            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg"
                    >
                        Successfully subscribed! 🎉
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

export default About;
