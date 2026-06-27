
import styled from "styled-components";

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

export const MainImg = styled.img`
  width: 50%;
  height: 250px;

  object-fit: cover;

  border-radius: 6px;
  margin: 0 auto;
  display: block;
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
    }
`

export const TextImg = styled.img`
  width: 45%;
  height: 250px;
  object-fit: cover;
  border-radius: 6px;
  margin-top: 25px;
  display: block;
    @media (max-width: 768px) {
     margin: 0 auto;
     padding: 15px 0;
    }
  `;

  export const TextSpan = styled.span`
    font-style: italic;
    font-size: 18px;
    font-weight: 500;
    margin-left: 50px;
  `;
