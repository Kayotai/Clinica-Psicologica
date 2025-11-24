import './index.css'
import { cards } from '../List'
import { motion } from 'framer-motion'

export default function Question()
{
    return(
        <section className="containerQuestion">
            <div className="containerEffectBlack">
                <h2 className="subtitleQuestion">
                    Como posso te ajudar:
                </h2>
                <div className="cardsQuestion">
                    <ul>
                        {cards.map(card => (
                            <motion.li 
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, ease: "linear" }}
                                viewport={{ once: true, amount: 0.3 }}
                                key={ card.key } 
                                className="cards">
                                    { card.icon }
                                    <h3>{ card.title }</h3>
                                    <p>{ card.text }</p>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}