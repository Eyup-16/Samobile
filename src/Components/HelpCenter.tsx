import React from "react";
import { HelpCards } from "./Cards";
import { QAObj } from "../data";
import { Element } from 'react-scroll';
import { motion } from 'framer-motion';

function HelpCenter() {
    const helpcards = QAObj.map((question) => {
        return <HelpCards key={question.id} icon={question.icon} Q={question.question} A={question.answer} />;
    });

    return (
        <section className='bg-gradient-to-b from-[#222] via-[#2a2a2a] to-[#333] p-12 relative overflow-hidden'>
            <Element name='Help Center' />
            
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
                    className='text-4xl max-md:text-3xl font-bold text-white text-center mb-4'
                >
                    Help Center
                </motion.h1>
                
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
                />
                
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-[18px] font-medium text-gray-300 block"
                >
                    Quick Answers to questions you may have.
                </motion.span>
            </motion.div>

            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="grid gap-6 mt-12 md:p-8 md:grid-cols-2 max-w-7xl mx-auto"
            >
                {helpcards}
            </motion.div>
        </section>
    );
}

export default HelpCenter;
