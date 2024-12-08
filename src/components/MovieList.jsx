import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movieList }) => {
  return (
    <div className="px-6 text-white">
      <h1 className="text-3xl py-4">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-none">
        <div className="flex">
          {movieList?.map((movie) => {
            return <MovieCard key={movie.id} posterPath={movie.poster_path} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
