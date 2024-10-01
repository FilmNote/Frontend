import { Palette } from "@/app/globals";
import styled from "@emotion/styled";

export const CommentSection = styled.div`
  margin-top: 20px;
  border-top: 1px solid #ddd;
  padding-top: 20px;
`;

export const Comment = styled.div`
  background-color: #f9f9f9;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.5;
  }
`;

export const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border-color: ${Palette.Primary_1};
  }
`;

export const SubmitCommentButton = styled.button`
  background-color: ${Palette.Primary_1};
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    background-color: #005bb5;
  }
`;

export const Title = styled.h3`
  margin-bottom: 16px;
`;
