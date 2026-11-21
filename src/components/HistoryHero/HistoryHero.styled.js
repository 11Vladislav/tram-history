import styled from "styled-components";
import { Link } from "react-router-dom";
import historyHeroBackground from "../../assets/oldpaper-texture.png";

export const HeroSection = styled.section`
  background: url(${historyHeroBackground}) center / cover no-repeat;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;

  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    padding: 50px 20px;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  z-index: 2;
`;

/* Отступ нужен, чтобы повёрнутая рамка не обрезалась overflow: hidden */
export const RightSide = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px;
`;

export const Breadcrumbs = styled.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;

  span {
    color: #a71d2c;
  }
`;

export const Crumb = styled(Link)`
  position: relative;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0%;
    height: 2px;
    background: var(--color-red);
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

export const HeroTitle = styled.h1`
  font-family: "Gosznak", serif;
  font-size: 3.2rem;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

export const HeroText = styled.p`
  max-width: 550px;
  color: #4f443b;
  font-size: 1.2rem;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

export const PhotoFrame = styled.div`
  position: relative;
  padding: 12px;

  background: #fffdf8;
  border-radius: 3px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.25);
  transform: rotate(-2deg);

  /* «Подложка» — вторая фотография под первой */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    top: -12px;
    left: 12px;
    z-index: -1;

    background: #e8dccb;
    border-radius: 3px;
    transform: rotate(3deg);
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  max-width: 650px;
  display: block;
  filter: sepia(45%);
`;