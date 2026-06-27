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

export const List = styled.ul`
    list-style-type: none;
    text-align: center;
    display: flex;
`;

export const ListItem = styled.li`

    margin-top: 20px;
    font-size 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const StyledLink = styled(NavLink)`
     text-decoration: none;
     font-weight: 400;
     font-size: 25px;
     color: #3f2d24;
     &:hover {
    color: #9d1f1f;
  }

`;

export const ItemIng = styled.img`
  width: 100%;
 height: auto; 
  object-fit: cover;
margin-top: 20px;
`;