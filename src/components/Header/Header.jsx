import { useState } from "react";

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
   BurgerLine,
   BurgerButton
} from './Header.styled';

import tramLogo from '../../assets/tram-logo.png';


const Header = () => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <TopBar>
          <LogoBlock>
            <StyledLink to="/"
            onClick={() => setIsMenuOpen(false)}>
                <TramImage
                  src={tramLogo}
                  alt="Киевский трамвай"
                />
            </StyledLink>
            <SiteTitle>
              <MainTitle>
                Киевские Трамвайные Маршруты: <span>История</span>
              </MainTitle>

              <Subtitle>
                История, маршруты и подвижной состав киевского трамвая
              </Subtitle>
            </SiteTitle>
          </LogoBlock>

           <BurgerButton
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </BurgerButton>

        <Navigation $isOpen={isMenuOpen}>
          <StyledLink
            to="/history"
            onClick={() => setIsMenuOpen(false)}
          >
            История
          </StyledLink>

          <StyledLink
            to="/routes"
            onClick={() => setIsMenuOpen(false)}
          >
            Маршруты
          </StyledLink>

          <StyledLink
            to="/rolling-stock"
            onClick={() => setIsMenuOpen(false)}
          >
            Подвижной состав
          </StyledLink>

          <StyledLink
            to="/archive"
            onClick={() => setIsMenuOpen(false)}
          >
            Архив фото
          </StyledLink>
        </Navigation>
        </TopBar>
      </HeaderWrapper>
    </>
  );
};

export default Header;