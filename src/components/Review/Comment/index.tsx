import { useEffect, useState } from "react";
import * as S from "./style";
import { CommentType } from "@/types/movie";

const Comment = ({ reviewId }: { reviewId: string | string[] }) => {
  const [comment, setComment] = useState<string>("");
  const [comments, setComments] = useState<CommentType[]>([]);

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const fetchComments = async () => {
    console.log(reviewId);

    try {
      const response = await fetch(`/api/comments/${reviewId}`);
      const data: CommentType[] = await response.json();
      setComments(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchComments();
  }, [reviewId]);

  const handleCommentSubmit = async () => {
    if (!comment) return;

    try {
      const response = await fetch(`/api/comments/${reviewId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: comment }),
      });

      if (response.ok) {
        alert("댓글이 등록되었습니다.");
        setComment("");
        fetchComments();
      }
    } catch (e) {
      console.error(e);
      alert("댓글 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <S.CommentSection>
      <S.Title>댓글</S.Title>
      {comments.map((c) => (
        <S.Comment key={c.id}>
          <p>{c.content}</p>
        </S.Comment>
      ))}
      <S.CommentInput
        type="text"
        placeholder="댓글을 입력하세요"
        value={comment}
        onChange={handleCommentChange}
      />
      <S.SubmitCommentButton onClick={handleCommentSubmit}>
        댓글 등록
      </S.SubmitCommentButton>
    </S.CommentSection>
  );
};

export default Comment;
