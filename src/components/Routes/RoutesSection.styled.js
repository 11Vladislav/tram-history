import styled from "styled-components";


export const Section = styled.section`
  background: #f5eee2;

  padding: 70px 30px;

  color: #3f2d24;
`;

export const Container = styled.div`
  max-width: 1450px;

  margin: 0 auto;

  display: grid;

  grid-template-columns: 280px 1fr;

  gap: 25px;


  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;



/* =========================
   SIDEBAR
========================= */

export const Sidebar = styled.aside`
  padding: 0 10px;
`;


export const SidebarTitle = styled.h2`
  font-family: "Gosznak", serif;

  font-size: 1.5rem;

  margin: 0 0 20px;
`;


export const RouteList = styled.div`
  display: flex;

  flex-direction: column;

  gap: 10px;
`;

export const RouteItem = styled.div`
  position: relative;

  display: flex;

  align-items: center;

  gap: 15px;

  padding: 14px 12px;

  min-height: 70px;

  border: 1px solid
    ${({ $active }) =>
      $active ? "#a52a25" : "#dfcdb6"};

  border-radius: 6px;

  background:
    ${({ $active }) =>
      $active ? "#fbf3e6" : "transparent"};

  cursor: pointer;

  transition: 0.25s;


  &:hover {
    background: #fbf3e6;

    border-color: #b56a5e;
  }
`;


export const RouteNumber = styled.div`
  min-width: 35px;

  color: #9d1f1f;

  font-family: "Gosznak", serif;

  font-size: 1.8rem;

  font-weight: 700;
`;


export const RouteInfo = styled.div`
  flex: 1;
`;


export const RouteName = styled.div`
  font-family: "Gosznak", serif;

  font-size: 0.95rem;

  line-height: 1.3;
`;


export const RouteYears = styled.div`
  margin-top: 6px;

  font-size: 0.75rem;

  color: #745d4c;
`;


export const Arrow = styled.div`
  font-size: 1.5rem;

  color: #a37852;
`;


export const SidebarButton = styled.button`
  width: 100%;

  margin-top: 16px;

  padding: 12px;

  border: 1px solid #d8bfa0;

  background: transparent;

  border-radius: 5px;

  color: #7d342e;

  cursor: pointer;
`;


/* =========================
   CONTENT
========================= */


export const Content = styled.main`
  min-width: 0;

  background: rgba(255, 250, 241, 0.35);

  padding: 5px 15px;
`;


export const RouteHeader = styled.div`
  display: flex;

  align-items: flex-start;

  justify-content: space-between;

  gap: 20px;

  margin-bottom: 15px;
`;


export const HeaderLeft = styled.div`
  display: flex;

  align-items: center;

  gap: 15px;
`;


export const BigRouteNumber = styled.div`
  width: 55px;

  height: 55px;

  display: flex;

  align-items: center;

  justify-content: center;

  border: 1px solid #d9b991;

  border-radius: 6px;

  color: #9d1f1f;

  font-family: "Gosznak", serif;

  font-size: 2rem;
`;


export const RouteTitleBlock = styled.div``;


export const RouteTitle = styled.h1`
  margin: 0;

  font-family: "Gosznak", serif;

  font-size: 1.8rem;

  line-height: 1.2;
`;


export const RouteYearsMain = styled.div`
  margin-top: 4px;

  color: #9d1f1f;

  font-weight: 600;
`;


export const Status = styled.span`
  padding: 7px 12px;

  border-radius: 6px;

  background: #edf0d9;

  color: #66703c;

  font-size: 0.8rem;
`;


export const Description = styled.p`
  max-width: 850px;

  margin: 0 0 20px;

  line-height: 1.7;

  font-size: 0.95rem;

  color: #4c4036;
`;


/* =========================
   STATS
========================= */


export const Stats = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  margin-bottom: 20px;

  border-top: 1px solid #e1d1bc;

  border-bottom: 1px solid #e1d1bc;


  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const StatItem = styled.div`
  display: flex;

  align-items: center;

  gap: 10px;

  padding: 12px 8px;

  border-right: 1px solid #e1d1bc;

  &:last-child {
    border-right: none;
  }
`;


export const StatIcon = styled.div`
  width: 38px;

  height: 38px;

  flex-shrink: 0;

  display: flex;

  align-items: center;

  justify-content: center;

  border-radius: 50%;

  background: #eadcc7;

  color: #775b3e;
`;


export const StatContent = styled.div`
  min-width: 0;
`;


export const StatLabel = styled.div`
  font-size: 0.7rem;

  color: #806d5b;

  margin-bottom: 3px;
`;


export const StatValue = styled.div`
  font-size: 0.78rem;

  font-weight: 600;
`;


/* =========================
   MAP
========================= */


export const MapWrapper = styled.div`
  position: relative;

  width: 100%;

  overflow: hidden;

  border-radius: 6px;

  border: 1px solid #d6c2a8;

  background: #e9ddca;

  cursor: pointer;

  &::after {
    content: "Нажмите для увеличения";

    position: absolute;

    right: 12px;
    bottom: 12px;

    padding: 6px 10px;

    border-radius: 4px;

    background: rgba(55, 40, 25, 0.75);

    color: #fff;

    font-size: 0.7rem;

    opacity: 0;

    transition: opacity 0.25s;

    pointer-events: none;
  }

  &:hover::after {
    opacity: 1;
  }
`;


export const MapImage = styled.img`
  display: block;

  width: 100%;

  height: 390px;

  object-fit: cover;

  transition: transform 0.3s ease;


  ${MapWrapper}:hover & {
    transform: scale(1.01);
  }


  @media (max-width: 768px) {
    height: 280px;
  }
`;


/* =========================
   PERIODS
========================= */


export const Periods = styled.div`
  display: flex;

  align-items: flex-start;

  padding: 15px 25px 0;

  overflow-x: auto;
`;


export const PeriodItem = styled.div`
  position: relative;

  flex: 1;

  min-width: 110px;

  text-align: center;

  cursor: pointer;
`;


export const PeriodDot = styled.div`
  position: relative;

  z-index: 2;

  width: 10px;

  height: 10px;

  margin: 0 auto 10px;

  border-radius: 50%;

  background: ${({ $active }) =>
    $active ? "#9d1f1f" : "#f7f0e4"};

  border: 2px solid #a9845f;
`;


export const PeriodLine = styled.div`
  position: absolute;

  top: 4px;

  left: calc(50% + 5px);

  width: calc(100% - 10px);

  height: 1px;

  background: #c9b496;
`;


export const PeriodLabel = styled.div`
  font-size: 0.7rem;

  color: #6d5744;

  transition: 0.2s;

  ${PeriodItem}:hover & {
    color: #9d1f1f;
  }
`;


/* =========================
   GALLERY
========================= */


export const Gallery = styled.div`
  margin-top: 25px;

  padding: 15px;

  border: 1px solid #dfcdb6;

  border-radius: 6px;

  background: rgba(250, 244, 233, 0.7);
`;


export const GalleryHeader = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 12px;
`;


export const GalleryTitle = styled.h3`
  margin: 0;

  font-family: "Gosznak", serif;

  font-size: 1.1rem;
`;


export const GalleryLink = styled.button`
  border: none;

  background: transparent;

  color: #9d1f1f;

  cursor: pointer;

  font-size: 0.75rem;
`;


export const GalleryGrid = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 8px;


  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;


export const GalleryImage = styled.img`
  width: 100%;
  height: 110px;

  object-fit: cover;

  border-radius: 5px;

  filter: sepia(25%);

  cursor: pointer;

  transition:
    transform 0.25s ease,
    filter 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    transform: scale(1.03);

    filter: sepia(0%);

    box-shadow: 0 5px 15px rgba(60, 40, 20, 0.25);
  }
`;