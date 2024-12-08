import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieTrailer();
  }, []);

  const getMovieTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    const movieTrailer = json?.results?.filter(
      (video) => video.type === "Trailer"
    );

    const trailer = movieTrailer.length ? movieTrailer[0] : json?.results[0];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useMovieTrailer;
