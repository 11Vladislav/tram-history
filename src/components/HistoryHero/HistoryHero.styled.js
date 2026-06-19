import styled from "styled-components";
import historyHeroBackground from '../../assets/oldpaper-texture.png';

export const HeroSection = styled.section`
  position: relative;

  background:
    url(${historyHeroBackground}) repeat center center;
  background-size: cover;
  overflow: hidden;
`;

export const HeroContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  padding: 80px 40px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftSide = styled.div`
  position: relative;
  z-index: 2;
`;

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const Breadcrumbs = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;
   span {
    color: #a71d2c;
} 
`;

export const HeroTitle = styled.h1`
  font-family: "Gosznak", sans-serif;

  font-size: 3.2rem;
  line-height: 1.1;

  color: #3f2d24;

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
`;

export const PhotoFrame = styled.div`
  position: relative;


  padding: 12px;

  border-radius: 3px;


  transform: rotate(-2deg);

  &::before {
    content: "";

    position: absolute;

    width: 100%;
    height: 100%;

    top: -12px;
    left: 12px;

    z-index: -1;

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