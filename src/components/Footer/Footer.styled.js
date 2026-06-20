import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #38291c;
  width: 100%;
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
      @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
     
  }
  `;

export const FooterTitle = styled.h2`
  color: #f4eee3;
  font-size: 18px; 
  font-weight: 600;
`;

export const FooterNav = styled.nav`
  display: flex;
    gap: 40px;
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: flex-start;
      gap: 10px;
     margin-left: -40px;
  }
`;

export const FooterLink = styled(NavLink)`
  color: #f4eee3;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        color: #9d1f1f;
    }
`;