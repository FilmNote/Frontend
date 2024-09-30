"use client";

import { useEffect, useState } from "react";
import * as S from "./style";
import Link from "next/link";
// import Image from "next/image";
import { useParams } from "next/navigation";
import { ReviewType } from "@/types/movie";

const Review = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState<ReviewType[]>();

  const fetchReviews = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/reviews/list/${id}`);
      const data: ReviewType[] = await response.json();
      setReviews(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <S.Container>
      {reviews?.map((review) => (
        <Link
          href={`/movie/${id}/review/${review.reviewId}`}
          key={review.reviewId}
        >
          <S.Card>
            {/* <S.Banner>
              <Image
                src="/path-to-image"
                alt={review.title}
                layout="fill"
                objectFit="cover"
              />
            </S.Banner> */}
            <S.Title>{review.title}</S.Title>
            <S.Info>
              <span>{review.createdAt.split("T")[0]}</span>
            </S.Info>
          </S.Card>
        </Link>
      ))}
    </S.Container>
  );
};

export default Review;
