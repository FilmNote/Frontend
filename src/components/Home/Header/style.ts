import styled from "@emotion/styled";
import { Palette } from "@/app/globals";

export const Header = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  background: #fff;
  border-bottom: 1px solid ${Palette.Neutral_4};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 96px;
  z-index: 5;
`;

export const Menu = styled.div`
  width: 50%;
  display: flex;
  gap: 48px;
  font-size: 18px;
  user-select: none;
  p {
    cursor: pointer;
  }
`;

export const SearchBox = styled.div`
  width: 400px;
  height: 48px;
  background-color: ${Palette.Background};
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 20px;
  input {
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    width: 100%;
    padding: 0;
  }
  svg {
    cursor: pointer;
  }
`;
