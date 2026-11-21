import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  width: 100%;
  background: var(--color-bg);
  border-bottom: 1px solid var(--color-border);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const TopBar = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  min-width: 0;

  @media (max-width: 768px) {
    gap: 12px;
  }
`;

/* Логотип — обычная ссылка, без подчёркивания и hover-эффекта меню */
export const LogoLink = styled(Link)`
  display: flex;
  flex-shrink: 0;
`;

export const TramImage = styled.img`
  width: 90px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 60px;
  }
`;

export const SiteTitle = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`;

export const MainTitle = styled.p`
  font-family: "Gosznak", serif;
  font-weight: 600;
  letter-spacing: 0.5px;
  font-size: 26px;
  line-height: 1.2;
  color: var(--color-text);

  span {
    color: #a71d2c;
  }

  @media (max-width: 992px) {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Subtitle = styled.p`
  margin-top: 6px;
  color: var(--color-text-muted);
  font-size: 18px;

  @media (max-width: 992px) {
    font-size: 14px;
  }

  /* На телефоне оставляем только заголовок */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 35px;

  @media (max-width: 992px) {
    gap: 22px;
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    z-index: 1000;

    flex-direction: column;
    background: var(--color-bg);
    border-top: 1px solid var(--color-border);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);

    padding: ${({ $isOpen }) => ($isOpen ? "20px" : "0 20px")};
    gap: ${({ $isOpen }) => ($isOpen ? "20px" : "0")};
    max-height: ${({ $isOpen }) => ($isOpen ? "320px" : "0")};
    overflow: hidden;

    /* Скрытые ссылки не должны получать фокус по Tab */
    visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};

    transition: max-height 0.3s ease, padding 0.3s ease, gap 0.3s ease,
      visibility 0.3s;
  }
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  color: var(--color-text);
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s ease;

  &:hover,
  &.active {
    color: var(--color-red);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: var(--color-red);
    transition: width 0.3s ease;
  }

  &:hover::after,
  &.active::after {
    width: 100%;
  }
`;

export const BurgerButton = styled.button`
  display: none;
  flex-shrink: 0;
  padding: 8px;

  background: transparent;
  border: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const BurgerLine = styled.span`
  width: 28px;
  height: 3px;
  background: var(--color-red);
  border-radius: 2px;
`;