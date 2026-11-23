import styled from "styled-components";
import { Link } from "react-router-dom";

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
`;

export const GalleryTitle = styled.h3`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 2rem;
  color: var(--color-text);

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const ViewAllLink = styled(Link)`
  flex-shrink: 0;
  color: var(--color-red);
  font-size: 1rem;
  font-weight: 600;
  transition: color 0.3s;

  &:hover {
    color: var(--color-red-dark);
  }
`;

export const MainImageButton = styled.button`
  display: block;
  width: 100%;
  padding: 0;
  border: none;
  background: transparent;
  overflow: hidden;
  border-radius: 10px;
  cursor: zoom-in;
`;

export const MainImage = styled.img`
  display: block;
  width: 100%;
  height: 420px;
  object-fit: cover;
  filter: sepia(60%);
  transition: transform 0.4s;

  ${MainImageButton}:hover & {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const Caption = styled.p`
  margin-top: 10px;
  font-size: 0.95rem;
  font-style: italic;
  color: #6a5d52;
`;

export const ThumbnailRow = styled.div`
  margin-top: 16px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  gap: 10px;
`;

export const ThumbnailButton = styled.button`
  padding: 0;
  background: transparent;
  cursor: pointer;
  border-radius: 6px;
  overflow: hidden;

  border: ${({ $active }) =>
    $active ? "3px solid var(--color-red)" : "2px solid transparent"};

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Thumbnail = styled.img`
  display: block;
  width: 100%;
  height: 80px;
  object-fit: cover;
  filter: sepia(60%);
`;