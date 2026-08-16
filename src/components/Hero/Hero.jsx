import {
    HeroSection,
    HeroContent,
    HeroTitle,
    HeroText,
    ButtonsRow,
    PrimaryButton,
    SecondaryButton,
    StyledNavLink,
} from './Hero.styled';



const Hero = () => {
    return (
             <HeroSection>
               <HeroContent>
                 <HeroTitle>
                   Киевские Трамвайные Маршруты: <span>История</span>
                 </HeroTitle>
       
                 <HeroText>
                   История развития трамвайных маршрутов Киева с 1892 года
                   до наших дней. Исследуйте старые линии, архивные фото,
                   схемы маршрутов и подвижной состав разных эпох.
                 </HeroText>
       
                 <ButtonsRow>
                   
                     <StyledNavLink to="/history"><PrimaryButton>Обзор истории</PrimaryButton></StyledNavLink>
                     <StyledNavLink to="/routes"><SecondaryButton>Все маршруты</SecondaryButton></StyledNavLink>
  
                   <SecondaryButton>
                     Старые фото
                   </SecondaryButton>
                 </ButtonsRow>
               </HeroContent>
             </HeroSection>
        
         );
};

export default Hero;