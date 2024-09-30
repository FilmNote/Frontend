"use client";

import { useEffect, useState } from "react";
import { MovieType } from "@/types/movie";
import * as S from "../Home/Main";
import Movie from "../Home/Movie";
import { useSearchParams } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const keyword = searchParams.get("keyword") || "";
  const [movieList, setMovieList] = useState<MovieType[]>([]);

  const fetchMovies = async (): Promise<void> => {
    try {
      const response = await fetch(
        `/api/movies/search?keyword=${encodeURIComponent(keyword)}`
      );
      const data: MovieType[] = await response.json();
      console.log(data);
      setMovieList(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    if (keyword) {
      fetchMovies();
    }
  }, [keyword]);

  return (
    <>
      <S.Title>
        <h1>검색 결과: "{keyword}"</h1>
      </S.Title>
      <S.Layer>
        {movieList.length > 0 ? (
          movieList.map((e) => <Movie key={e.id} movie={e} />)
        ) : (
          <p>결과가 없습니다.</p>
        )}
      </S.Layer>
    </>
  );
};

export default Search;
