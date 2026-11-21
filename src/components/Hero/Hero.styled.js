import styled from "styled-components";
import { NavLink } from "react-router-dom";
import heroBackground from "../../assets/bg-1.png";

export const HeroSection = styled.section`
  width: 100%;
  min-height: 600px;
  padding: 100px 0;

  background: url(${heroBackground});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    min-height: 0;
    padding: 60px 0;
  }
`;

export const HeroContent = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 40px;
  color: var(--color-text);
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: var(--color-red);
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const HeroText = styled.p`
  max-width: 700px;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
  }
`;

/* Одна ссылка-кнопка вместо <a><button/></a> — валидный HTML и нормальная доступность */
export const ButtonLink = styled(NavLink)`
  display: inline-block;
  min-width: 190px;
  padding: 15px 35px;
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