import styled from "styled-components";
import { NavLink } from 'react-router-dom';


export const HeaderWrapper = styled.header`
  width: 100%;
  background: #f4eee3;
  border-bottom: 1px solid #d7c8b4;
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const TramImage = styled.img`
  width: 90px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const SiteTitle = styled.div`
  display: flex;
  flex-direction: column;
    @media (max-width: 768px) {
    display: none;
  }
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: #3f2d24;
  font-weight: 700;
  margin: 0;
  font-size: 26px;
  span {
    color: #a71d2c;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  margin-top: 6px;
  color: #746457;
  font-size: 18px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 35px;

  @media (max-width: 768px) {
    position: absolute;

    top: 100%;
    left: 0;

    width: 100%;

    background: #f4eee3;

    border-top: 1px solid #d7c8b4;

    flex-direction: column;

    padding: ${({ $isOpen }) =>
      $isOpen ? "20px" : "0"};

    gap: ${({ $isOpen }) =>
      $isOpen ? "20px" : "0"};

    max-height: ${({ $isOpen }) =>
      $isOpen ? "300px" : "0"};

    overflow: hidden;

    transition: all 0.3s ease;

    box-shadow: 0 8px 20px rgba(0,0,0,0.08);

    z-index: 1000;
  }
`;

export const StyledLink = styled(NavLink)`

  position: relative;
  text-decoration: none;
  color: #3f2d24;
  font-weight: 600;
  font-size: 1rem;
  transition: 0.3s ease;

  &:hover {
    color: #9d1f1f;
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 0%;
    height: 2px;
    background: #9d1f1f;
    transition: 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const BurgerButton = styled.button`
  display: none;

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

  background: #9d1f1f;
  border-radius: 2px;
`;