"use client";

import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Movie from "./Movie";
import { MovieType } from "@/types/movie";

const Main = () => {
  const [movieList, setMovieList] = useState<MovieType[]>();

  const fetchMovies = async (): Promise<void> => {
    try {
      const response = await fetch("/api/movies");
      const data: MovieType[] = await response.json();
      console.log(data);
      setMovieList(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Title>
        <h1>영화</h1>
      </Title>
      <Layer>
        {movieList?.map((e) => (
          <Movie key={e.id} movie={e} />
        ))}
      </Layer>
    </>
  );
};

const Layer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(17vw, auto));
  justify-content: space-between;
  row-gap: 2rem;
  padding: 0 80px 80px;

  @media screen and (max-width: 1500px) {
    grid-template-columns: repeat(auto-fill, minmax(25vw, auto));
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: repeat(auto-fill, minmax(35vw, auto));
  }

  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(70vw, auto));
    justify-content: center;
  }
`;

const Title = styled.div`
  padding: 120px 80px 16px;
`;

export default Main;
