"use client";

import * as S from "./style";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ReviewType } from "@/types/movie";
import { marked } from "marked";
import Comment from "../Comment";

const ReviewDetail = () => {
  const { id, reviewId } = useParams();
  const router = useRouter();
  const [review, setReview] = useState<ReviewType>();
  const [password, setPassword] = useState<string>();

  const fetchReviews = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/reviews/${reviewId}`);
      const data: ReviewType = await response.json();
      setReview(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [reviewId]);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleDelete = async () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    try {
      const response = await fetch(`/api/reviews/${reviewId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        alert("리뷰가 삭제되었습니다.");
        router.push(`/movie/${id}`);
      } else {
        alert("비밀번호가 맞지 않습니다.");
      }
    } catch (e) {
      console.error(e);
      alert("삭제 중 오류가 발생했습니다.");
    }
  };

  const handleEdit = () => {
    if (!password) {
      alert("비밀번호를 입력해주세요.");
      return;
    }
    router.push(`/movie/${id}/review/edit/${reviewId}?password=${password}`);
  };

  return (
    <S.Container>
      {review && (
        <>
          <S.Title>{review.title}</S.Title>
          <S.Date>
            작성일: {new Date(review.createdAt).toLocaleDateString()}
          </S.Date>
          <S.Preview
            dangerouslySetInnerHTML={{ __html: marked(review.content) }}
          />
          <S.Buttons>
            <S.PasswordInput
              type="password"
              placeholder="비밀번호 입력"
              value={password}
              onChange={handlePasswordChange}
            />
            <S.EditButton onClick={handleEdit}>수정하기</S.EditButton>
            <S.DeleteButton onClick={handleDelete}>삭제하기</S.DeleteButton>
          </S.Buttons>
          <Comment reviewId={reviewId} />
        </>
      )}
    </S.Container>
  );
};

export default ReviewDetail;
