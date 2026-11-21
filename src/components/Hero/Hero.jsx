import {
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  ButtonsRow,
  ButtonLink,
} from "./Hero.styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroTitle>
          Киевские Трамвайные Маршруты: <span>История</span>
        </HeroTitle>

        <HeroText>
          История развития трамвайных маршрутов Киева с 1892 года до наших
          дней. Исследуйте старые линии, архивные фото, схемы маршрутов и
          подвижной состав разных эпох.
        </HeroText>

        <ButtonsRow>
          <ButtonLink to="/history" $primary>
            Обзор истории
          </ButtonLink>
          <ButtonLink to="/routes">Все маршруты</ButtonLink>
          <ButtonLink to="/gallery">Старые фото</ButtonLink>
        </ButtonsRow>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;