import React from "react";
import VedioTitle from "./VedioTitle";
import VedioBackground from "./VedioBackground";
import { useSelector } from "react-redux";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  // Early Return
  if (!movies) return;

  const mainMovie = movies[0];
  console.log(mainMovie);

  const { original_title, overview } = mainMovie;

  return (
    <div>
      <VedioTitle title={original_title} overview={overview} />
      <VedioBackground />
    </div>
  );
};

export default MainContainer;