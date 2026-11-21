import styled from "styled-components";
import { Link } from "react-router-dom";

export const Section = styled.section`
  background: var(--color-bg-section);
  border-top: 1px solid var(--color-border);
  padding: 50px 40px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 50px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
    margin-bottom: 30px;
  }
`;

export const List = styled.ul`
  max-width: 1400px;
  margin: 0 auto;
  list-style: none;
  text-align: center;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    gap: 30px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 25px;
  font-weight: 400;
  color: var(--color-text);
  transition: color 0.3s ease;

  &:hover {
    color: var(--color-red);
  }
`;

export const ItemImg = styled.img`
  width: 250px;
  max-width: 100%;
  height: 200px;
  object-fit: cover;
  margin-top: 20px;
`;