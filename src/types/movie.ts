export interface MovieType {
  id: number;
  title: string;
  posterUrl: string;
  overview: string;
  voteAverage: number;
  releaseDate: string;
}

export interface ReviewType {
  movieId: number;
  reviewId: number;
  password: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
