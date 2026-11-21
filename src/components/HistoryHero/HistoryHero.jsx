import {
  HeroSection,
  HeroContainer,
  LeftSide,
  RightSide,
  Breadcrumbs,
  Crumb,
  HeroTitle,
  HeroText,
  PhotoFrame,
  HeroImage,
} from "./HistoryHero.styled";

import HistoryHeroImage from "../../assets/history-hero-img.png";

const HistoryHero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <LeftSide>
          <Breadcrumbs aria-label="Хлебные крошки">
            <Crumb to="/">Главная</Crumb> / <span aria-current="page">История</span>
          </Breadcrumbs>

          <HeroTitle>
            История
            <br />
            киевского трамвая
          </HeroTitle>

          <HeroText>
            Более 130 лет киевский трамвай является неотъемлемой частью жизни
            города. От первых вагонов на конной тяге до современных
            низкопольных трамваев — это история развития технологий, городской
            инфраструктуры и людей, которые создавали транспортную систему
            Киева.
          </HeroText>
        </LeftSide>

        <RightSide>
          <PhotoFrame>
            <HeroImage src={HistoryHeroImage} alt="Старый киевский трамвай" />
          </PhotoFrame>
        </RightSide>
      </HeroContainer>
    </HeroSection>
  );
};

export default HistoryHero;