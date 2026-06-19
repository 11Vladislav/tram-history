import styled from "styled-components";

import leatherTexture from "../../assets/leather-texture.png";

export const Section = styled.section`
  position: relative;

  width: 100%;
  margin: 0 auto;

  min-height: 260px;

  background:
    linear-gradient(
      rgba(117, 85, 60, 0.85),
      rgba(117, 85, 60, 0.85)
    ),
    url(${leatherTexture});

  background-size: cover;

  border-top: 2px solid #c8b39a;
  border-bottom: 2px dashed #d9c5ad;

  padding: 45px 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  overflow: hidden;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }
`;

export const Content = styled.div`
  z-index: 2;
`;

export const Title = styled.h2`
  font-family: "Playfair Display", sans-serif;
  color: white;
  font-size: 2.5rem;
  line-height: 1.3;
  margin-bottom: 35px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

export const ButtonsRow = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

export const RedButton = styled.button`
  padding: 16px 34px;

  background: #b22222;
  color: white;

  border: none;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  box-shadow: 0 4px 12px rgba(0,0,0,0.25);

  transition: 0.3s;

  &:hover {
    background: #921818;
    transform: translateY(-2px);
  }
        @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const WhiteButton = styled.button`
  padding: 16px 34px;

  background: #f6f1e8;
  color: #3f2d24;

  border: none;
  border-radius: 6px;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    transform: translateY(-2px);
  }
    @media (max-width: 768px) {
    flex-grow: 1;
  }
`;

export const PhotosWrapper = styled.div`
  position: relative;
  width: 320px;
  height: 220px;
  margin-right: 60px;
`;


export const Photo = styled.img`
  position: absolute;

  width: 280px;
  right: 0;
  top: 0;

  transform: rotate(3deg);

  box-shadow: 0 10px 25px rgba(0,0,0,0.35);

`;