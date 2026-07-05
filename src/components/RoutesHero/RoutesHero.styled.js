import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const RoutesSection = styled.section`
     background-color: #fff8d1;

`;

export const RoutesContainer = styled.div`
    max-width: 1400px;
  margin: 0 auto;

  padding: 80px 40px;
  display: flex;
  gap: 80px;
  align-items: center;
  justify-content: space-between;  
  @media (max-width: 768px) {
   flex-direction: column;
  }
`;


export const RoutesTitle = styled.h3`
  font-family: "Gosznak", sans-serif;

  font-size: 3.2rem;
  line-height: 1.1;

  color: #3f2d24;

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

export const RoutesImage = styled.img`
  width: 100%;
  max-width: 650px;

  display: block;
  border-radius: 5%;
  box-shadow: 10px 5px 5px #fff8d1;
  filter: sepia(45%);
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