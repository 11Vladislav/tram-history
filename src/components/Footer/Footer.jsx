import {
    FooterContainer,
    FooterTitle,
    FooterNav,
    FooterLink  
} from "./Footer.styled";

const Footer = () => {
    return (
        <FooterContainer>       
            <FooterTitle>© 2024 Киевские трамваи. Все права защищены.</FooterTitle>
            <FooterNav>
                <FooterLink to="/about">О проекте</FooterLink> 
                <FooterLink to="/contact">Контакты</FooterLink>
                <FooterLink to="/privacy">Политика конфиденциальности</FooterLink>
            </FooterNav>
        </FooterContainer>
    );
};

export default Footer;