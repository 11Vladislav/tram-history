import {
  Section,
  Container,
  LeftColumn,
  RightColumn,
  Title,
  Divider,
  Description,
  FeaturesList,
  FeatureItem,
  IconCircle,
  FeatureText,
} from "./TramAndCity.styled";

import HistoryGallery from "../HistoryGallery/HistoryGallery";

import { FaUsers, FaCog, FaHeart } from "react-icons/fa";

const FEATURES = [
  { icon: <FaUsers />, text: "Соединял районы и людей" },
  { icon: <FaCog />, text: "Отражал развитие технологий" },
  { icon: <FaHeart />, text: "Оставил тёплые воспоминания в сердцах киевлян" },
];

const TramAndCity = () => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <Title>Трамвай и город</Title>

          <Divider />

          <Description>
            Трамвай стал не просто транспортом, а частью культурного и
            исторического наследия Киева. Он пережил войны, смену эпох и
            технологий, но всегда оставался рядом с киевлянами.
          </Description>

          <FeaturesList>
            {FEATURES.map(({ icon, text }) => (
              <FeatureItem key={text}>
                <IconCircle aria-hidden="true">{icon}</IconCircle>
                <FeatureText>{text}</FeatureText>
              </FeatureItem>
            ))}
          </FeaturesList>
        </LeftColumn>

        <RightColumn>
          <HistoryGallery />
        </RightColumn>
      </Container>
    </Section>
  );
};

export default TramAndCity;