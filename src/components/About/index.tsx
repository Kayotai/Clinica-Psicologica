import './index.css';
import psicologa from '../../assets/psicologa.webp';
import ButtonZap from '../buttonCTA';
import { motion } from 'framer-motion';


export default function About()
{
    return(
        <section className="aboutSection" id='about'>
            <motion.figure
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: .8, ease: "linear" }}
                viewport={{ once: true, amount: .3 }}
            >
                <img src={ psicologa } alt="Foto da psicóloga" />
            </motion.figure>
            <div className="apresentation">
                <h2>Dra. Bruna</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Autem numquam dicta 
                    laboriosam quod facere at eligendi 
                    illum animi impedit distinctio.
                    Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, facilis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, numquam!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, magni?
                </p>
                <ButtonZap />
            </div>
        </section>
    )
}