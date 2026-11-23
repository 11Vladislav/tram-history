import styled from "styled-components";
import { Link } from "react-router-dom";
 
export const Section = styled.section`
  background: var(--color-bg-section);
  padding: 50px 40px 80px;
 
  @media (max-width: 768px) {
    padding: 30px 20px 50px;
  }
`;
 
export const Container = styled.div`
  max-width: ${({ $wide }) => ($wide ? "1400px" : "900px")};
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
  margin-bottom: 20px;
 
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;
 
export const Lead = styled.p`
  max-width: 700px;
  margin: 0 auto 40px;
  text-align: center;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;
 
  @media (max-width: 768px) {
    font-size: 1.05rem;
  }
`;
 
export const SectionTitle = styled.h2`
  font-family: "Gosznak", serif;
  font-size: 2rem;
  color: var(--color-text);
  margin: 50px 0 25px;
 
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin: 35px 0 20px;
  }
`;
 
export const Text = styled.p`
  margin: 0 0 20px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5c5046;
 
  a {
    color: var(--color-red);
    font-weight: 600;
    text-decoration: underline;
  }
`;
 
export const List = styled.ul`
  margin: 0 0 20px 22px;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #5c5046;
 
  a {
    color: var(--color-red);
    font-weight: 600;
    text-decoration: underline;
  }
`;
 
/* ---------- Кнопки ---------- */
 
export const ButtonRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin: 30px 0;
`;
 
/* Работает и как <a href="mailto:...">, и как as={Link} to="..." */
export const ButtonLink = styled.a`
  display: inline-block;
  min-width: 190px;
  padding: 15px 30px;
  border-radius: 8px;
 
  text-align: center;
  font-size: 1rem;
  font-weight: 600;
 
  background: ${({ $primary }) =>
    $primary ? "var(--color-red)" : "rgba(255, 255, 255, 0.7)"};
  color: ${({ $primary }) => ($primary ? "#fff" : "var(--color-text)")};
  border: 1px solid ${({ $primary }) => ($primary ? "transparent" : "#bca894")};
 
  transition: background 0.3s ease, transform 0.3s ease;
 
  &:hover {
    background: ${({ $primary }) =>
      $primary ? "var(--color-red-dark)" : "#fff"};
    transform: translateY(-2px);
  }
`;
 
/* ---------- Карточки ---------- */
 
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;
 
export const Card = styled.article`
  display: flex;
  flex-direction: column;
  overflow: hidden;
 
  background: var(--color-bg-light);
  border: 1px solid #dfd1be;
  border-radius: 10px;
 
  transition: transform 0.3s ease, box-shadow 0.3s ease;
 
  /* hover только у карточек-ссылок (as={Link}) */
  &:is(a):hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(60, 40, 20, 0.15);
  }
`;
 
export const CardImg = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  filter: sepia(25%);
`;
 
export const CardBody = styled.div`
  padding: 18px;
`;
 
export const CardTitle = styled.h3`
  font-family: "Gosznak", serif;
  font-size: 1.3rem;
  color: var(--color-text);
`;
 
export const CardMeta = styled.p`
  margin-top: 6px;
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--color-red);
`;
 
export const CardText = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #5c5046;
`;
 
/* ---------- Фотоархив ---------- */
 
export const PhotoGrid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
`;
 
export const PhotoButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  text-align: left;
  font: inherit;
  color: inherit;
  cursor: pointer;
`;
 
export const PhotoImg = styled.img`
  display: block;
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: 6px;
  filter: sepia(35%);
  transition: filter 0.3s ease, transform 0.3s ease;
 
  ${PhotoButton}:hover & {
    filter: sepia(0%);
    transform: scale(1.02);
  }
`;
 
export const PhotoCaption = styled.span`
  display: block;
  margin-top: 10px;
  font-size: 0.95rem;
  line-height: 1.5;
  color: #5c5046;
`;
 
/* ---------- Воспоминания / пустое состояние / 404 ---------- */
 
export const Story = styled.article`
  margin-bottom: 30px;
  padding: 20px 24px;
  background: var(--color-bg-light);
  border-left: 4px solid var(--color-red);
  border-radius: 0 8px 8px 0;
`;
 
export const StoryMeta = styled.p`
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--color-red);
`;
 
export const EmptyState = styled.div`
  padding: 40px 24px;
  text-align: center;
  border: 2px dashed #cbb69f;
  border-radius: 10px;
  color: #5c5046;
  line-height: 1.7;
`;
 
export const BigCode = styled.p`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 6rem;
  line-height: 1;
  color: var(--color-red);
  margin-bottom: 10px;
`;