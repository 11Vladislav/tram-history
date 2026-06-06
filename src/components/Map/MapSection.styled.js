import styled from "styled-components";

export const SectionWrapper = styled.section`
  background: #f4eee3;
  padding-bottom: 60px;
`;

export const MapContainer = styled.div`
  width: 100%;
`;

export const MapImage = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;

export const InfoGrid = styled.div`
  max-width: 1400px;
  margin-top: 35px;
  margin-left: 35px;

  background: #f7f1e7;
  border: 1px solid #d8cab7;

  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  gap: 16px;

  padding: 28px;

  border-right: 1px solid #e1d6c7;

  transition: all 0.3s ease;

  &:hover {
    background: #fdfaf5;
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 992px) {
    border-right: none;
    border-bottom: 1px solid #e1d6c7;
  }
`;

export const CardImage = styled.img`
  width: 72px;
  height: 72px;
  object-fit: contain;
  flex-shrink: 0;
`;

export const CardTitle = styled.h3`
  font-family: "Playfair Display", sans-serif;
  font-size: 1.35rem;
  color: #3f2d24;
  margin-bottom: 10px;
`;

export const CardText = styled.p`
  color: #5f554d;
  font-size: 0.95rem;
  line-height: 1.6;
`;