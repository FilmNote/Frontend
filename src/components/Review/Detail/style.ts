import { Palette } from "@/app/globals";
import styled from "@emotion/styled";

export const Container = styled.div`
  max-width: 800px;
  margin: 100px auto;
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Date = styled.p`
  font-size: 14px;
  color: gray;
  margin-bottom: 20px;
`;

export const Preview = styled.div`
  overflow-y: auto;
  margin-top: 20px;
  img {
    width: 100%;
  }
`;

export const Buttons = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 56px;
`;

export const PasswordInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const EditButton = styled.button`
  background-color: ${Palette.Primary_1};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005bb5;
  }
`;

export const DeleteButton = styled.button`
  background-color: ${Palette.Error};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #d32f2f;
  }
`;
