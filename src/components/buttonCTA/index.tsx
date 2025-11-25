import { motion, type Variants } from "framer-motion";
import './index.css'


export default function ButtonZap()
{
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
    return(
        <motion.a 
            href="#"  
            className="buttonZap"
            variants={itemVariants}
            whileHover={{ 
                scale: 1.1, 
                transition: { duration: 0.2, ease: "linear" } 
            }} 
        >
            Agende sua primeira sessão
        </motion.a>
    )
}