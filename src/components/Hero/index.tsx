import { motion } from 'framer-motion';
import './index.css'

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                // Intervalo de 0.2s entre cada elemento
                staggerChildren: 0.6, 
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
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

                <motion.a href="#" variants={itemVariants} className="buttonZap">
                    Agende sua primeira sessão
                </motion.a>
            </motion.div>
        </div>
    );
}