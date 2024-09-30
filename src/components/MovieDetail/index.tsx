"use client";

import { useEffect, useState } from "react";
import * as S from "./style";
import { MovieType } from "@/types/movie";
import { useParams } from "next/navigation";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import Review from "./Review";
import Link from "next/link";

const DetailPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieType>();
  const [star, setStar] = useState(0);

  const fetchMovies = async (): Promise<void> => {
    try {
      const response = await fetch(`/api/movies/detail/${id}`);
      const data: MovieType = await response.json();
      console.log(data);
      setMovie(data);
      setStar(Math.round(data.voteAverage / 2));
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <S.Layout>
      <>
        <S.MovieSection>
          <S.ImageWrapper>
            <Image
              src={`https://image.tmdb.org/t/p/w500${movie?.posterUrl}`}
              alt={"movie post"}
              width={350}
              height={510}
            />
          </S.ImageWrapper>
          <S.TextSection>
            <S.Title>{movie?.title}</S.Title>
            <S.Date>개봉일 : {movie?.releaseDate}</S.Date>
            <S.Rating>
              {Array(star)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} color="gold" />
                ))}
              {Array(5 - star)
                .fill(0)
                .map((_, index) => (
                  <FaStar key={index} color="lightgray" />
                ))}
              <span>
                평균 평점 : {movie && (movie?.voteAverage / 2).toFixed(2)} / 5
              </span>
            </S.Rating>
            <S.InfoSection>{movie?.overview}</S.InfoSection>
          </S.TextSection>
        </S.MovieSection>
        <div>
          <S.ReviewNav>
            <S.Title>리뷰</S.Title>
            <Link href={`/movie/${id}/review/write`}>
              <S.ReviewButton>리뷰 작성</S.ReviewButton>
            </Link>
          </S.ReviewNav>
          <Review />
        </div>
      </>
    </S.Layout>
  );
};

export default DetailPage;
