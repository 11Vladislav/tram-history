import styled from "styled-components";

export const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
`;

export const GalleryTitle = styled.h3`
  margin: 0;

  font-size: 2rem;
  color: #3f2d24;

  font-family: "Gosznak", serif;
`;

export const ViewAllButton = styled.button`
  background: transparent;
  border: none;

  color: #9d1f1f;

  font-size: 1rem;
  font-weight: 600;

  cursor: pointer;

  transition: 0.3s;

  &:hover {
    color: #7d1818;
  }
`;

export const MainImageWrapper = styled.div`
  overflow: hidden;
  border-radius: 10px;
`;

export const MainImage = styled.img`
  width: 100%;
  height: 420px;

  object-fit: cover;

  cursor: pointer;

  filter: sepia(60%);

  transition: 0.4s;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ThumbnailRow = styled.div`
  margin-top: 16px;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Thumbnail = styled.img`
  width: 100%;
  height: 90px;

  object-fit: cover;

  border-radius: 6px;

  cursor: pointer;

  filter: sepia(60%);

  border: ${({ $active }) =>
    $active
      ? "3px solid #9d1f1f"
      : "2px solid transparent"};

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;