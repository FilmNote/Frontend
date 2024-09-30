import { Palette } from "@/app/globals";
import styled from "@emotion/styled";

export const Container = styled.div`
  height: 100vh;

  display: flex;
  justify-content: space-between;
  padding: 92px 20px 0;
  border-radius: 10px;
`;

export const LeftPane = styled.div`
  flex: 1;
  margin-right: 20px;
`;

export const RightPane = styled.div`
  height: calc(100% - 20px);
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  background-color: #f9f9f9;
`;

export const TitleInput = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 24px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${Palette.Primary_1};
    outline: none;
  }
`;

export const PassInput = styled.input`
  width: 18%;
  padding: 10px 15px;
  font-size: 16px;
  border-radius: 8px;
  margin-right: 16px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 70%;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: ${Palette.Primary_1};
    outline: none;
  }
`;

export const Preview = styled.div`
  height: calc(100% - 40px);
  overflow-y: auto;
  background: #f9f9f9;
  margin-top: 20px;
  img {
    width: 90%;
  }
`;

export const DropzoneContainer = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background 0.3s;

  &:hover {
    background: #f0f0f0;
  }
`;

export const Button = styled.button`
  background-color: ${Palette.Primary_1};
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
`;
