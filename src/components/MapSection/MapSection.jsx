import {
  SectionWrapper,
  MapContainer,
  MapImage,
  InfoGrid,
  InfoCard,
  CardImage,
  CardTitle,
  CardText,
} from "./MapSection.styled";
import mapImage from "../../assets/all-tram-map-1.png";
import tramLogo from "../../assets/tram-logo.png";
import routesImage from "../../assets/routes.png";
import trainCarsImage from "../../assets/train-cars.png";
import memoryBookImage from "../../assets/memory-book.png";


const cards = [
  {
    title: "История трамвая",
    text: "Ключевые события и этапы развития киевского трамвая.",
    image: tramLogo,
  },
  {
    title: "Маршруты Киева",
    text: "Карты и описание всех трамвайных маршрутов.",
    image: routesImage,
  },
  {
    title: "Подвижной состав",
    text: "Модели трамваев разных лет. Технические данные.",
    image: trainCarsImage,
  },
  {
    title: "Воспоминания",
    text: "Истории киевлян о жизни и поездках на трамвае.",
    image: memoryBookImage,
  },
];

const MapSection = () => {
  return (
    <SectionWrapper>
      <MapContainer>
        <MapImage
          src={mapImage}
          alt="Карта маршрутов"
        />
      </MapContainer>

      <InfoGrid>
        {cards.map((card) => (
          <InfoCard key={card.title}>
            <CardImage src={card.image} alt={card.title} />

            <div>
              <CardTitle>{card.title}</CardTitle>
              <CardText>{card.text}</CardText>
            </div>
          </InfoCard>
        ))}
      </InfoGrid>
    </SectionWrapper>
  );
};

export default MapSection;