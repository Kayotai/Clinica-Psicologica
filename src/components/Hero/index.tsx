import { motion, type Variants } from 'framer-motion';
import './index.css'

export default function Hero() {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.8,
                delayChildren: 0.5, 
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: { 
                ease: "linear",
                duration: 1
            }
        },
    };

    return (
        <div className="containerHero">
            <motion.div 
                className="titleCTA"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.h1 className="title" variants={itemVariants}>
                    Encontre a clareza que você precisa para seguir em frente.
                </motion.h1>
                
                <motion.h2 variants={itemVariants}>
                    <strong>Terapia Cognitivo-Comportamental</strong> online e presencial para crianças e adultos.
                </motion.h2>

                <motion.a 
                    href="#" 
                    variants={itemVariants} 
                    className="buttonZap"
                    whileHover={{ 
                        scale: 1.1, 
                        transition: { duration: 0.2, ease: "linear" } 
                    }} 
                >
                    Agende sua primeira sessão
                </motion.a>
            </motion.div>
        </div>
    );
}