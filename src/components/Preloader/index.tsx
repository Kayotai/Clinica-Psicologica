import { motion } from 'framer-motion';
import './index.css';

export default function Preloader() {
  return (
    <motion.div
      className="preloader-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }} 
      exit={{ opacity: 0, transition: { duration: 0.5, delay: 0.5 } }} 
      transition={{ duration: 0.5 }}
    >
      <h1>Dra. Bruna</h1>
      <p>Carregando...</p>
    </motion.div>
  );
}