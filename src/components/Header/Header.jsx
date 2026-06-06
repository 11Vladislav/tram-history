import {
  HeaderWrapper,
  TopBar,
  LogoBlock,
  TramImage,
  SiteTitle,
  MainTitle,
  Subtitle,
  Navigation,
  StyledLink,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroText,
  ButtonsRow,
  PrimaryButton,
  SecondaryButton,
} from './Header.styled';

import tramLogo from '../../assets/tram-logo.png';


const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <TopBar>
          <LogoBlock>
            <TramImage
              src={tramLogo}
              alt="Киевский трамвай"
            />

            <SiteTitle>
              <MainTitle>
                Киевские Трамвайные Маршруты: <span>История</span>
              </MainTitle>

              <Subtitle>
                История, маршруты и подвижной состав киевского трамвая
              </Subtitle>
            </SiteTitle>
          </LogoBlock>

          <Navigation>
            <StyledLink to="/routes">Маршруты</StyledLink>
            <StyledLink to="/rolling-stock">Подвижной состав</StyledLink>
            <StyledLink to="/archive">Архив фото</StyledLink>
            <StyledLink to="/stories">Истории</StyledLink>
          </Navigation>
        </TopBar>
      </HeaderWrapper>

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
            <PrimaryButton>
              Обзор истории
            </PrimaryButton>

            <SecondaryButton>
              Все маршруты
            </SecondaryButton>

            <SecondaryButton>
              Старые фото
            </SecondaryButton>
          </ButtonsRow>
        </HeroContent>
      </HeroSection>
    </>
  );
};

export default Header;