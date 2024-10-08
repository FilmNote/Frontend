import styled from "@emotion/styled";

export const Movie = styled.div`
  position: relative;
  width: 17vw;
  height: 53vh;

  &:hover img {
    transform: scale(1.1);
  }

  img {
    transition: all 0.1s linear;
  }

  @media screen and (max-width: 1500px) {
    width: 25vw;
  }
  @media screen and (max-width: 960px) {
    width: 35vw;
    height: 50vh;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const MovieInfo = styled.a`
  height: 100%;
  width: 17vw;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 1500px) {
    width: 25vw;
  }
  @media screen and (max-width: 960px) {
    width: 35vw;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  width: 17vw;
  height: 41vh;

  @media screen and (max-width: 1500px) {
    width: 25vw;
  }
  @media screen and (max-width: 960px) {
    width: 35vw;
  }
  @media screen and (max-width: 640px) {
    width: 70vw;
  }
`;

export const Title = styled.p`
  font-size: 1.3rem;
  font-weight: 800;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

export const Overview = styled.p`
  font-size: 0.825rem;
  width: 100%;
  height: 3.75rem;
  line-height: 1.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
