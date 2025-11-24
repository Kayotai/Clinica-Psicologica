import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';
import { faqList } from "../List/index"; 
import "./index.css";


interface AccordionItemProps {
    question: string;
    answer: string;
}


const AccordionItem = ({ question, answer }: AccordionItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div className="faq-item">
            <button 
                className="faq-question" 
                onClick={() => setIsOpen(!isOpen)}
                aria-expanded={isOpen} 
            >
                <span className="question-text">{question}</span>
                
                {/* Seta Giratória */}
                <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="icon-wrapper"
                >
                    <IoIosArrowDown size={20} />
                </motion.span>
            </button>

            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        className="faq-answer-wrapper"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="faq-answer-content">
                            <p>{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};


export default function FAQ() {
    return (
        <section className="faq-section" id="faq">
            <div className="faq-container">
                <h2>Dúvidas Frequentes</h2>
                
                <div className="faq-list">
                   
                    {faqList.map((item) => (
                        <AccordionItem 
                            key={item.id} 
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}