import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS, API_URL } from "../utils/constant";
import { addNowPlayingMovies } from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    try {
      const nowPlayingMovies = await fetch(API_URL, API_OPTIONS);
      const json = await nowPlayingMovies.json();
      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Erron in getNowPlayingMovies : -" + error);
    }
  };
};

export default useNowPlayingMovies;
