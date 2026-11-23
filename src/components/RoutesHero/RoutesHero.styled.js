import styled from "styled-components";
import { Link } from "react-router-dom";

/* Фон приведён к общей палитре сайта (раньше был жёлтый #fff8d1) */
export const Hero = styled.section`
  background-color: var(--color-bg-light);
  border-bottom: 1px solid var(--color-border);
`;

export const RoutesContainer = styled.div`
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

export const RightSide = styled.div`
  display: flex;
  justify-content: center;
`;

export const Breadcrumbs = styled.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;

  [aria-current="page"] {
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

export const RoutesTitle = styled.h1`
  font-family: "Gosznak", serif;
  font-size: 3.2rem;
  line-height: 1.1;
  color: var(--color-text);
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

export const RoutesText = styled.p`
  max-width: 550px;
  color: #4f443b;
  font-size: 1.2rem;
  line-height: 1.9;

  @media (max-width: 768px) {
    font-size: 1.05rem;
    line-height: 1.7;
  }
`;

export const RoutesImage = styled.img`
  display: block;
  width: 100%;
  max-width: 650px;
  border-radius: 5%;
  box-shadow: 0 10px 25px rgba(60, 40, 20, 0.2);
  filter: sepia(45%);
`;