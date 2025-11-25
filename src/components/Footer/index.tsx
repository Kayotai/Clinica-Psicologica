import './index.css'
import { social, linksImportant } from '../List'


export default function Footer()
{
    return(
        <footer>
            <ul className="containerName">
                <li>
                    <h4 id="contact">Redes Sociais e Contato</h4>
                    <ul className="containerSocial">
                        { social.map(s => (
                            <li key={s.key}>
                                { s.icon }
                                <a 
                                   href={s.href} 
                                   target={s.target}
                                   rel={s.rel}
                                >
                                    { s.nameSocial }
                                </a>
                            </li>
                        )) }
                    </ul>
                </li>
                <li>
                    <h4>Links Importantes</h4>
                    <ul className="containerLinksImportant">
                        { linksImportant.map( links => (
                            <li>
                                <a 
                                    href={links.href} 
                                    aria-label={links.aria}
                                    rel={links.noferrer}
                                    target={links.target}
                                    key={links.key}
                                    id="local"
                                >
                                    {links.link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </li>
                <li className="containerCRP">
                    <h4>CRP</h4>
                    <p>Dra. Bruna - Clínica Psicológica <br /> 0000003</p>
                </li>
                <li className="locate">
                    <h4>Localização da Clínica:</h4>
                    <p>Rua não sei onde n° 70</p>
                </li>
            </ul>
            <p>Copyright © 2025 Clínica Psicológica Dra. Bruna. Todos os direitos reservados.</p>
        </footer>
    )
}