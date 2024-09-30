import { Palette } from "@/app/globals";
import styled from "@emotion/styled";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 160px 15vw 0;
`;

export const MovieSection = styled.div`
  display: flex;
  gap: 2.5rem;
  margin-bottom: 2.5rem;
`;

export const ImageWrapper = styled.div`
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export const InfoSection = styled.div`
  display: flex;
  gap: 2.5rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.375rem;
`;

export const Date = styled.div`
  color: ${Palette.Neutral_2};
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 8px;
  }
`;

export const ReviewNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ReviewButton = styled.button`
  font-size: 18px;
  background: none;
  border: 2px solid ${Palette.Primary_1};
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
`;
