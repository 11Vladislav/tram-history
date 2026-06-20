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
  GalleryHeader,
  GalleryTitle,
  ViewAll,
  MainPhoto,
  ThumbnailRow,
  Thumbnail,
} from "./TramAndCity.styled";


import {
  FaUsers,
  FaCog,
  FaHeart,
} from "react-icons/fa";


import mainPhoto from "../../assets/aleksandr-line.jpg";
import thumb1 from "../../assets/konka.webp";
import thumb2 from "../../assets/pusha-tram.jpg";
import thumb3 from "../../assets/mtv-82.webp";
import thumb4 from "../../assets/ktv-55.webp";
import thumb5 from "../../assets/tatra-t3-tram.jpg";
import thumb6 from "../../assets/electron-tram.jpg";


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
                в сердцах поколений
              </FeatureText>
            </FeatureItem>
          </FeaturesList>
         </LeftColumn>
         <RightColumn>

          <GalleryHeader>
            <GalleryTitle>
              Исторические фотографии
            </GalleryTitle>

            <ViewAll>
              Смотреть все
            </ViewAll>
          </GalleryHeader>

          <MainPhoto
            src={mainPhoto}
            alt="Линия на Подоле"
          />

          <ThumbnailRow>
            <Thumbnail src={thumb1} />
            <Thumbnail src={thumb2} />
            <Thumbnail src={thumb3} />
            <Thumbnail src={thumb4} />
            <Thumbnail src={thumb5} />
            <Thumbnail src={thumb6} />
          </ThumbnailRow>

        </RightColumn>
        </Container>
    </Section>
    )
  };

export default TramAndCity;