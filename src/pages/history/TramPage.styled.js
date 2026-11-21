import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background: var(--color-bg-section);
  padding: 40px 40px 70px;

  @media (max-width: 768px) {
    padding: 30px 20px 50px;
  }
`;

/* Общая ширина контента: строки текста не растягиваются на весь экран */
export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Breadcrumbs = styled.nav`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 25px;

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

export const Title = styled.h1`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 25px;
  }
`;

export const MainImg = styled.img`
  display: block;
  width: 100%;
  max-height: 750px;
  object-fit: cover;
  border-radius: 6px;
`;

export const Text = styled.p`
  max-width: 900px;
  margin: 30px 0;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

/* Список дат вместо абзаца с <br/> */
export const EventList = styled.ul`
  max-width: 900px;
  margin: 30px 0;
  list-style: none;

  display: grid;
  gap: 18px;

  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;

  li {
    padding-left: 18px;
    border-left: 3px solid #d8c4ac;
  }

  strong {
    color: var(--color-text);
  }

  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;

export const Figure = styled.figure`
  margin: 0;
`;

export const FigImg = styled.img`
  display: block;
  width: 100%;
  max-height: 450px;
  object-fit: cover;
  object-position: top;
  border-radius: 6px;
`;

export const FigCaption = styled.figcaption`
  margin-top: 10px;
  font-size: 1rem;
  font-style: italic;
  line-height: 1.5;
  color: #6a5d52;
`;

/* Фото + текст рядом */
export const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 45%) minmax(0, 1fr);
  gap: 30px;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const PeopleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const ImageRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 30px;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
    gap: 20px;
  }
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-top: 40px;
  font-weight: 600;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`;