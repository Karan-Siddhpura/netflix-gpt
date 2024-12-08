import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const nowPlayingList = useSelector((store) => store?.movies.nowPlayingMovies);
  return (
    <div className="bg-black">
      <div className="-mt-36 relative z-20 pl-12">
        <MovieList title={"Now Playing"} movieList={nowPlayingList} />
        <MovieList title={"Trending"} movieList={nowPlayingList} />
        <MovieList title={"Popular"} movieList={nowPlayingList} />
        <MovieList title={"Upcoming Movies"} movieList={nowPlayingList} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
