import styled from "styled-components";

export const Section = styled.section`
  background: #f5efe5;
  padding: 40px 40px;
`;


export const Title = styled.h2`
  text-align: center;

  font-family: "Gosznak", serif;
  font-size: 3rem;

  color: #3f2d24;

  margin-bottom: 40px;
`;

export const TimelineLine = styled.div`
  max-width: 1400px;
  height: 2px;

  margin: 0 auto;

  background: #d8c4ac;
`;

export const TimelineGrid = styled.div`
  max-width: 1400px;

  margin: -12px auto 0;

  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineItem = styled.div`
  position: relative;

  padding: 0 20px 30px;

  border-right: 1px solid #e5d9ca;

  &:last-child {
    border-right: none;
  }
`;

export const Dot = styled.div`
  width: 18px;
  height: 18px;

  margin: 0px auto 25px;

  background: #9d1f1f;

  border-radius: 50%;

  border: 3px solid white;

  box-shadow: 0 0 0 2px #cbb69f;
`;

export const Year = styled.h3`
  text-align: center;

  color: #9d1f1f;

  font-size: 2rem;

  margin-bottom: 20px;

  font-family: "Gosznak", serif;
`;

export const PeriodTitle = styled.h4`
  font-size: 1.3rem;

  color: #3f2d24;

  margin-bottom: 15px;

  text-align: center;
`;

export const Description = styled.p`
  text-align: center;

  color: #5d5046;

  line-height: 1.7;

  min-height: 120px;
`;

export const TramImage = styled.img`
  width: 100%;
  max-width: 180px;

  display: block;

  margin: 20px auto 0;

  filter: sepia(35%);
`;