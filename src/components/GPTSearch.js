import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BG_IMG } from "../utils/contants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img alt="background-img" src={NETFLIX_BG_IMG} />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GPTSearch;
