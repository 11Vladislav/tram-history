import {
  Hero,
  RoutesContainer,
  RoutesTitle,
  RoutesText,
  LeftSide,
  RightSide,
  Breadcrumbs,
  Crumb,
  RoutesImage,
} from "./RoutesHero.styled";
import RoutesHeroImg from "../../assets/routes-hero-tram.png";

const RoutesHero = () => {
  return (
    <Hero>
      <RoutesContainer>
        <LeftSide>
          <Breadcrumbs aria-label="Хлебные крошки">
            <Crumb to="/">Главная</Crumb> / <span aria-current="page">Маршруты</span>
          </Breadcrumbs>

          <RoutesTitle>Маршруты Киева</RoutesTitle>

          <RoutesText>
            Трамвайные маршруты соединяют районы, людей и поколения. Узнайте
            историю каждого маршрута и его путь сквозь время.
          </RoutesText>
        </LeftSide>

        <RightSide>
          <RoutesImage src={RoutesHeroImg} alt="Старый киевский трамвай" />
        </RightSide>
      </RoutesContainer>
    </Hero>
  );
};

export default RoutesHero;