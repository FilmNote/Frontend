"use client";

import { MovieType } from "@/types/movie";
import * as S from "./style";
import Image from "next/image";

interface MovieProps {
  movie: MovieType;
}
const Movie = ({ movie }: MovieProps) => {
  return (
    <S.Movie>
      <S.MovieInfo href={`/movie/${movie.id}`}>
        <S.ImageWrapper>
          <Image
            fill
            src={movie.posterUrl}
            alt="movie post"
            sizes="
              (max-width: 640px) 70vw, 
              (max-width: 960px) 35vw, 
              (max-width: 1500px) 25vw, 
              17vw
            "
          />
        </S.ImageWrapper>
        <S.Title>{movie.title}</S.Title>
        <S.Overview>{movie.overview}</S.Overview>
      </S.MovieInfo>
    </S.Movie>
  );
};

export default Movie;
