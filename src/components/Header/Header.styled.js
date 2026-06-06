import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import heroBackground from '../../assets/bg-1.png';

export const HeaderWrapper = styled.header`
  width: 100%;
  background: #f4eee3;
  border-bottom: 1px solid #d7c8b4;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

export const TopBar = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 18px 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
`;

export const LogoBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const TramImage = styled.img`
  width: 90px;
  height: auto;
  object-fit: contain;

  @media (max-width: 768px) {
    width: 70px;
  }
`;

export const SiteTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainTitle = styled.h1`
  font-size: 2rem;
  color: #3f2d24;
  font-weight: 700;
  margin: 0;
  font-size: 26px;
  span {
    color: #a71d2c;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Subtitle = styled.p`
  margin-top: 6px;
  color: #746457;
  font-size: 0.95rem;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 35px;

  @media (max-width: 768px) {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
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

export const HeroSection = styled.section`
  width: 100%;
  height: 600px;
  padding-top: 100px;
  

  background: 
    url(${heroBackground});

  background-size: cover;
  background-position: cover;
  background-repeat: no-repeat;

  display: flex;
  
`;

export const HeroImage = styled.img`
  width: 100%;
  height: auto; 
  object-fit: cover;
`;

export const HeroContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
`;

export const HeroTitle = styled.h2`
  font-size: 4rem;
  color: #3f2d24;
  margin-bottom: 20px;
  line-height: 1.1;

  span {
    color: #9d1f1f;
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
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  padding: 15px 35px;
  border: none;
  border-radius: 8px;

  background: #9d1f1f;
  color: white;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: #7e1818;
    transform: translateY(-2px);
  }
`;

export const SecondaryButton = styled.button`
  padding: 15px 35px;
  border-radius: 8px;
  border: 1px solid #bca894;

  background: rgba(255, 255, 255, 0.7);
  color: #3f2d24;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: white;
    transform: translateY(-2px);
  }
`;
