import {
  Section,
  Title,
  TimelineGrid,
  TimelineItem,
  Dot,
  Year,
  PeriodTitle,
  Description,
  TramImage,
} from "./Timeline.styled";

import horseTram from "../../assets/horse-tram.png";
import electricTram from "../../assets/electric-tram.png";
import expansionTram from "../../assets/expansion-tram.png";
import warTram from "../../assets/war-tram.png";
import modernTram from "../../assets/modern-tram.png";

// Перед публикацией проверь даты и формулировки по источникам
const timelineData = [
  {
    year: "1891",
    title: "Первые трамваи",
    description:
      "30 июля (11 августа) 1891 года в Киеве открылось первое трамвайное движение. Это была линия конного трамвая.",
    image: horseTram,
  },
  {
    year: "1896",
    title: "Электрификация",
    description: "Все линии трамвая стали электрическими.",
    image: electricTram,
  },
  {
    year: "1920–1930",
    title: "Расширение сети",
    description:
      "Активное развитие маршрутов и строительство новых линий. Строительство депо.",
    image: expansionTram,
  },
  {
    year: "1941–1945",
    title: "Военные годы",
    description:
      "Трамвай продолжал работать в суровые военные годы, обеспечивая жизнь города.",
    image: warTram,
  },
  {
    year: "1950 – наши дни",
    title: "Современный этап",
    description:
      "Обновление подвижного состава и инфраструктуры. Внедрение современных технологий.",
    image: modernTram,
  },
];

const Timeline = () => {
  return (
    <Section>
      <Title>Ключевые этапы</Title>

      <TimelineGrid>
        {timelineData.map((item) => (
          <TimelineItem key={item.year}>
            <Dot aria-hidden="true" />
            <Year>{item.year}</Year>
            <PeriodTitle>{item.title}</PeriodTitle>
            <Description>{item.description}</Description>
            <TramImage src={item.image} alt={item.title} />
          </TimelineItem>
        ))}
      </TimelineGrid>
    </Section>
  );
};

export default Timeline;