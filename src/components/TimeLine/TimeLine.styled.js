import styled from "styled-components";

export const Section = styled.section`
  background: var(--color-bg-section);
  padding: 40px 40px 60px;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-family: "Gosznak", serif;
  font-size: 3rem;
  color: var(--color-text);
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const TimelineGrid = styled.ol`
  max-width: 1400px;
  margin: 0 auto;
  list-style: none;

  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: minmax(0, 1fr);
  }
`;

export const Dot = styled.div`
  position: relative;
  z-index: 1;

  width: 18px;
  height: 18px;
  margin: 0 auto 25px;

  background: var(--color-red);
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #cbb69f;
`;

/* Линия рисуется у каждого пункта, поэтому не разъезжается при любой сетке */
export const TimelineItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 20px 30px;

  &::before {
    content: "";
    position: absolute;
    top: 8px; /* середина кружка */
    left: 0;
    right: 0;
    height: 2px;
    background: #d8c4ac;
  }

  @media (min-width: 1201px) {
    border-right: 1px solid #e5d9ca;

    &:first-child::before {
      left: 50%;
    }

    &:last-child {
      border-right: none;
    }

    &:last-child::before {
      right: 50%;
    }
  }
`;

export const Year = styled.h3`
  text-align: center;
  color: var(--color-red);
  font-family: "Gosznak", serif;
  font-size: 2rem;
  margin-bottom: 20px;
`;

export const PeriodTitle = styled.h4`
  text-align: center;
  font-size: 1.3rem;
  color: var(--color-text);
  margin-bottom: 15px;
`;

export const Description = styled.p`
  text-align: center;
  color: #5d5046;
  line-height: 1.7;
`;

/* margin-top: auto прижимает картинки к низу, они выравниваются без min-height */
export const TramImage = styled.img`
  width: 100%;
  max-width: 180px;
  display: block;
  margin: auto auto 0;
  padding-top: 20px;
  filter: sepia(35%);
`;