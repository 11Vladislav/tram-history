import styled from "styled-components";

/* Сброс стилей для элементов, которые стали кнопками (доступны с клавиатуры) */
const buttonReset = `
  padding: 0;
  border: none;
  background: transparent;
  font: inherit;
  color: inherit;
  text-align: left;
  cursor: pointer;
`;

export const Section = styled.section`
  background: var(--color-bg-section);
  padding: 70px 30px;
  color: var(--color-text);

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

export const Container = styled.div`
  max-width: 1450px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 25px;

  @media (max-width: 900px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

/* =========================
   SIDEBAR
========================= */

export const Sidebar = styled.aside`
  padding: 0 10px;
  align-self: start;

  @media (min-width: 901px) {
    position: sticky;
    top: 20px;
  }
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

  @media (max-width: 900px) {
    max-height: 320px;
    overflow-y: auto;
  }
`;

export const RouteItem = styled.button`
  ${buttonReset}

  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  min-height: 70px;
  padding: 14px 12px;

  border: 1px solid ${({ $active }) => ($active ? "#a52a25" : "#dfcdb6")};
  border-radius: 6px;
  background: ${({ $active }) => ($active ? "#fbf3e6" : "transparent")};

  transition: 0.25s;

  &:hover {
    background: #fbf3e6;
    border-color: #b56a5e;
  }
`;

export const RouteNumber = styled.div`
  min-width: 35px;
  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 1.8rem;
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
  font-size: 0.8rem;
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
  border-radius: 5px;
  background: transparent;

  color: #7d342e;
  font: inherit;
  cursor: pointer;

  transition: background 0.25s;

  &:hover {
    background: #fbf3e6;
  }
`;

/* =========================
   CONTENT
   (div, а не main: <main> уже есть в App.jsx)
========================= */

export const Content = styled.div`
  min-width: 0;
  background: rgba(255, 250, 241, 0.35);
  padding: 5px 15px;

  @media (max-width: 768px) {
    padding: 5px 0;
  }
`;

export const RouteHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 15px;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const BigRouteNumber = styled.div`
  width: 55px;
  height: 55px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid #d9b991;
  border-radius: 6px;

  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 2rem;
`;

export const RouteTitleBlock = styled.div``;

export const RouteTitle = styled.h2`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 1.8rem;
  line-height: 1.2;
`;

export const RouteYearsMain = styled.div`
  margin-top: 4px;
  color: var(--color-red);
  font-weight: 600;
`;

export const Status = styled.span`
  padding: 7px 12px;
  border-radius: 6px;
  background: #edf0d9;
  color: #66703c;
  font-size: 0.85rem;
`;

export const Description = styled.p`
  max-width: 850px;
  margin: 0 0 20px;
  line-height: 1.7;
  font-size: 1rem;
  color: #4c4036;
`;

/* =========================
   STATS
========================= */

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(190px, 1fr));
  margin-bottom: 20px;
  border-top: 1px solid #e1d1bc;
  border-bottom: 1px solid #e1d1bc;
`;

export const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 8px;
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
  font-size: 0.8rem;
  color: #806d5b;
  margin-bottom: 3px;
`;

export const StatValue = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
`;

/* =========================
   MAP
========================= */

export const MapWrapper = styled.button`
  ${buttonReset}

  position: relative;
  display: block;
  width: 100%;
  overflow: hidden;

  border: 1px solid #d6c2a8;
  border-radius: 6px;
  background: #e9ddca;
  cursor: zoom-in;

  &::after {
    content: "Нажмите для увеличения";
    position: absolute;
    right: 12px;
    bottom: 12px;
    padding: 6px 10px;
    border-radius: 4px;
    background: rgba(55, 40, 25, 0.75);
    color: #fff;
    font-size: 0.75rem;
    opacity: 0;
    transition: opacity 0.25s;
    pointer-events: none;
  }

  &:hover::after,
  &:focus-visible::after {
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

export const PeriodItem = styled.button`
  ${buttonReset}

  position: relative;
  flex: 1;
  min-width: 110px;
  text-align: center;
`;

export const PeriodDot = styled.div`
  position: relative;
  z-index: 2;
  width: 10px;
  height: 10px;
  margin: 0 auto 10px;
  border-radius: 50%;
  background: ${({ $active }) => ($active ? "var(--color-red)" : "#f7f0e4")};
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
  font-size: 0.8rem;
  font-weight: ${({ $active }) => ($active ? 600 : 400)};
  color: ${({ $active }) => ($active ? "var(--color-red)" : "#6d5744")};
  transition: color 0.2s;

  ${PeriodItem}:hover & {
    color: var(--color-red);
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
  gap: 12px;
  margin-bottom: 12px;
`;

export const GalleryTitle = styled.h3`
  margin: 0;
  font-family: "Gosznak", serif;
  font-size: 1.1rem;
`;

export const GalleryLink = styled.button`
  ${buttonReset}
  flex-shrink: 0;
  color: var(--color-red);
  font-size: 0.85rem;
  font-weight: 600;
`;

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;

  @media (max-width: 700px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

/* Кнопка-обёртка с картинкой внутри — открывается и с клавиатуры */
export const GalleryImage = styled.button`
  ${buttonReset}

  display: block;
  overflow: hidden;
  border-radius: 5px;

  img {
    display: block;
    width: 100%;
    height: 110px;
    object-fit: cover;
    filter: sepia(25%);
    transition: transform 0.25s ease, filter 0.25s ease;
  }

  &:hover img {
    transform: scale(1.03);
    filter: sepia(0%);
  }
`;

export const Events = styled.ul`
  list-style: none;
  display: grid;
  gap: 14px;
  margin: 0 0 25px;
  max-width: 850px;
  font-size: 1rem;
  line-height: 1.7;
  color: #4c4036;

  li {
    padding-left: 16px;
    border-left: 3px solid #d8c4ac;
  }
`;

export const EventDate = styled.strong`
  display: block;
  color: var(--color-red);
  font-weight: 600;
`;