import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute w-[100%] h-[100%] -z-10">
        <img
          className="w-[100%] h-[100%]"
          src={BG_URL}
          alt="background banner"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
