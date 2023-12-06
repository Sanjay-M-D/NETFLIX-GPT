import React from "react";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";
import { NETFLIX_BG_IMG } from "../utils/contants";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          className="object-cover h-screen md:h-fit"
          alt="background-img"
          src={NETFLIX_BG_IMG}
        />
      </div>
      <div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GPTSearch;
