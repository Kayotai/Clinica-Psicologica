import type React from "react";
import { FaCompass, FaInstagram, FaLaptop, FaMailBulk, FaPhone, FaUser, FaWhatsapp } from 'react-icons/fa'

export interface comumHeaderLinkProps {
    href: string;
    label: string;
    target?: string;
    text: string;
    key: number;
};

export interface cardsQuestion {
    icon: React.ReactNode;
    title: string;
    text: string;
    key: string;
}


export const faqList = [
{
    id: 1,
    question: "Como funciona a primeira sessão?",
    answer: "A primeira sessão é um momento de acolhimento para entendermos suas necessidades. Não há julgamentos, apenas escuta ativa."
},
{
    id: 2,
    question: "Aceita convênio?",
    answer: "Trabalhamos através do sistema de reembolso. Emitimos nota fiscal para que você solicite o retorno ao seu plano."
},
{
    id: 3,
    question: "O sigilo é garantido no online?",
    answer: "Sim. Utilizamos plataformas criptografadas e seguimos o código de ética rigorosamente."
}];

export const cards: cardsQuestion[] = [
{ 
    icon: <FaCompass size={55} color="white" className="bgIcon" />, 
    title: "Orientação",  
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    key: "0"
},
{ 
    icon: <FaUser size={55} color="white" className="bgIcon" />, 
    title: "Terapia Individual", 
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    key: "1"
},
{ 
    icon: <FaLaptop size={55} color="white" className="bgIcon" />, 
    title: "Terapia Online", 
    text: "Lorem  it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.", 
    key: "2"
}];

export const comumHeaderLinks: comumHeaderLinkProps[] = [
{ 
    href: "#home", 
    label: "Home do site", 
    text: "Home", 
    key: 0 
},
{ 
    href: "#about", 
    label: "Sobre mim", 
    text: "Sobre mim", 
    key: 1 
},
{ 
    href: "#contact", 
    label: "Meus Contatos", 
    text: "Contatos", 
    key: 2 
},
{ 
    href: "#local", 
    label: "Meu endereço", 
    text: "Endereço", 
    key: 3 
}];


export const social = [
    { icon: <FaInstagram size={20} color="#506040" />, nameSocial: "instagram", key: 0, href: "#", target: "_blank", rel: "noreferrer noopener" },
    { icon: <FaWhatsapp size={20} color="#506040" />, nameSocial: "Whatzapp", key: 1, href: "#", target: "_blank", rel: "noreferrer noopener" },
    { icon: <FaPhone size={20} color="#506040" />, nameSocial: "55 1234-5678", key: 2 },
    { icon: <FaMailBulk size={20} color="#506040" />, nameSocial: "psicologa@gmail.com", key: 3 }
]

export const linksImportant = [
    {
        link: "Política de privacidade",
        href: "/politica",
        aria: "Política de privacidade",
        key: 0
    },
    {
        link: "Ícones",
        href: "https://icons8.com.br/icons/set/free-icons",
        noferrer: "noreferrer noopener",
        target: "_blank",
        key: 1
    }
]

