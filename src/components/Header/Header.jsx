import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  HeaderWrapper,
  TopBar,
  LogoBlock,
  LogoLink,
  TramImage,
  SiteTitle,
  MainTitle,
  Subtitle,
  Navigation,
  StyledLink,
  BurgerLine,
  BurgerButton,
} from "./Header.styled";

import tramLogo from "../../assets/tram-logo.png";

const NAV_ITEMS = [
  { to: "/history", label: "История" },
  { to: "/routes", label: "Маршруты" },
  { to: "/rolling-stock", label: "Подвижной состав" },
  { to: "/archive", label: "Архив фото" },
];

const Header = () => {
  const { pathname } = useLocation();

  // Храним страницу, на которой открыли меню. Когда страница меняется,
  // openedAt !== pathname и меню закрывается само, без useEffect + setState.
  const [openedAt, setOpenedAt] = useState(null);
  const isMenuOpen = openedAt === pathname;

  // Закрытие по Escape: setState вызывается в обработчике события, это допустимо
  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpenedAt(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  const toggleMenu = () => setOpenedAt(isMenuOpen ? null : pathname);

  return (
    <HeaderWrapper>
      <TopBar>
        <LogoBlock>
          <LogoLink to="/" aria-label="На главную">
            <TramImage src={tramLogo} alt="Киевский трамвай" />
          </LogoLink>

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
          type="button"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={toggleMenu}
        >
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </BurgerButton>

        <Navigation
          id="main-navigation"
          aria-label="Основная навигация"
          $isOpen={isMenuOpen}
        >
          {NAV_ITEMS.map(({ to, label }) => (
            <StyledLink key={to} to={to}>
              {label}
            </StyledLink>
          ))}
        </Navigation>
      </TopBar>
    </HeaderWrapper>
  );
};

export default Header;