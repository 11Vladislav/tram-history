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

import {
  FaUsers,
  FaCog,
  FaHeart,
} from "react-icons/fa";


const TramAndCity = () => {
  return (
    <Section>
        <Container>
            <LeftColumn>
          <Title>Трамвай и город</Title>

          <Divider />

          <Description>
            Трамвай стал не просто транспортом,
            а частью культурного и исторического
            наследия Киева.

            Он пережил войны, смену эпох
            и технологий, но всегда оставался
            рядом с киевлянами.
          </Description>

          <FeaturesList>
             <FeatureItem>
              <IconCircle>
                <FaUsers />
              </IconCircle>

              <FeatureText>
                Соединял районы и людей
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <IconCircle>
                <FaCog />
              </IconCircle>

              <FeatureText>
                Отражал развитие технологий
              </FeatureText>
            </FeatureItem>

            <FeatureItem>
              <IconCircle>
                <FaHeart />
              </IconCircle>

              <FeatureText>
                Оставил тёплые воспоминания
                в сердцах 
              </FeatureText>
            </FeatureItem>
          </FeaturesList>
         </LeftColumn>
         <RightColumn>
          <HistoryGallery />
        </RightColumn>
        </Container>
    </Section>
    )
  };

export default TramAndCity;