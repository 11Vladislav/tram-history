
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
    background: #f5efe5;
  padding: 10px 40px 50px 70px;
  
`;

export const Title = styled.h2`
  text-align: center;

  font-family: "Gosznak", serif;
  font-size: 3rem;
  font-weight: 700;
  color: #3f2d24;

  margin-bottom: 70px;
`;

export const Breadcrumbs = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 35px;
   span {
    color: #a71d2c;
} 
`;

export const MainImg = styled.img`
  width: 100%;
  max-height: 750px;

  object-fit: cover;

  border-radius: 6px;
  margin: 0 auto;
  display: block;
   @media (max-width: 768px) {
    width: 100%;
   }
  `;

  export const MainImg1 = styled.img`
    width: 100%;
  height: 650px;

  object-fit: none;

  border-radius: 6px;
  margin: 0 auto;
  display: block;
   @media (max-width: 768px) {
    width: 100%;
   }
  
  
  `;

  export const Text = styled.p`
  margin: 35px 0;
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5c5046;
  
  margin-bottom: 35px;
`;


export const ItemWrap = styled.div`
  display: flex;
  width: 100%;

    @media (max-width: 768px) {
     flex-direction: column;
     
    }
`;

export const TextWrap = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
flex-wrap: no-wrap;
max-width: 700px;
  @media (max-width: 768px) {
     display: block;
     width: 100%;
    }
`

export const TextImg = styled.img`
  width: 45%;
  max-height: 450px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 25px;
  margin-right: 25px;
  display: block;
    @media (max-width: 768px) {
     margin: 0 auto;
     width: 70%;
      
     padding: 15px 0;
    }
  `;

  export const TextSpan = styled.span`
    font-style: italic;
    font-size: 18px;
    font-weight: 500;
    margin-left: 50px;
       @media (max-width: 768px) {
        width: 100%;
        text-align:  justify;
        margin-left: 0;
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
