import styled from "styled-components";
import heroBackground from '../../assets/bg-1.png';

export const HeroSection = styled.section`
  width: 100%;
  min-height: 600px;
  padding-top: 100px;
  padding-bottom: 100px;
  

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

padding: 0 40px;
`;

export const HeroTitle = styled.h2`
  font-size: 40px;
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
  flex-grow: 1;
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
  flex-grow: 1;
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
