import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 16px 0 80px;
  justify-items: center;
`;

export const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 280px;
  padding: 16px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 166px;
  background-color: #f0f0f0;
`;

export const Title = styled.h3`
  display: flex;
  margin: 10px 0 40px;
  font-size: 18px;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`;
