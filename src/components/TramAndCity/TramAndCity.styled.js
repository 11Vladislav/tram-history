import styled from "styled-components";

export const Section = styled.section`
  background: #f5efe4;
  padding: 80px 40px;
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 50px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const LeftColumn = styled.div``;

export const RightColumn = styled.div`
  background: #f8f2e7;

  border: 1px solid #dfd1be;
  border-radius: 10px;

  padding: 24px;
`;

export const Title = styled.h2`
  font-family: "Gosznak", serif;
  font-size: 2.5rem;
  color: #2f241c;

  margin-bottom: 20px;
`;

export const Divider = styled.div`
  width: 60px;
  height: 3px;

  background: #9d1f1f;

  margin-bottom: 30px;
`;

export const Description = styled.p`
  line-height: 1.9;
  color: #4f443b;
  font-weight: 600;
  margin-bottom: 40px;
`;

export const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const IconCircle = styled.div`
  width: 54px;
  height: 54px;

  border-radius: 50%;

  background: #e8dccb;

  display: flex;
  justify-content: center;
  align-items: center;

  color: #4c3b30;
  font-size: 1.3rem;
`;

export const FeatureText = styled.div`
  font-size: 1.05rem;
  color: #3f2d24;
`;

