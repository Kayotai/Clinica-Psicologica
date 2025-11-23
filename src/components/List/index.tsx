export interface comumHeaderLinkProps {
    href: string;
    label: string;
    target?: string;
    text: string;
    key: string;
};

export const comumHeaderLinks: comumHeaderLinkProps[] = [
    { href: "#home", label: "Home do site", text: "Home", key: "0" },
    { href: "#about", label: "Sobre mim", text: "Sobre mim", key: "1" },
    { href: "#contact", label: "Meus Contatos", text: "Contatos", key: "2" },
    { href: "#local", label: "Meu endereço", text: "Endereço", key: "3" },
];

