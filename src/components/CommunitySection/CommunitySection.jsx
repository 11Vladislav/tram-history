import {
  Section,
  Content,
  Title,
  ButtonsRow,
  RedButton,
  WhiteButton,
  PhotosWrapper,
  Photo,
} from "./CommunitySection.styled";

import oldPhoto from "../../assets/old-photos.png";


const CommunitySection = () => {
  return (
    <Section>
      <Content>
        <Title>
          Поделитесь своими фото и воспоминаниями
          <br />
          о киевских трамваях!
        </Title>

        <ButtonsRow>
          <RedButton>Добавить фото</RedButton>
          <WhiteButton>Написать историю</WhiteButton>
        </ButtonsRow>
      </Content>

      <PhotosWrapper>
        <Photo src={oldPhoto} />
      </PhotosWrapper>
    </Section>
  );
};

export default CommunitySection;