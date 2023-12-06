import React from "react";
import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className=" w-36 md:w-48 pr-3 ">
      <img alt="poster" src={IMG_CDN_URL + poster_path} />
    </div>
  );
};

export default MovieCard;
