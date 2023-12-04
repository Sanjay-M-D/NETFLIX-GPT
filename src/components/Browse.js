import React from "react";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          - MainContainer
             - Vedio Background 
             - Vedio Title 
          
          - SecondaryContainer 
             - MovieLists * n
             - Cards * n
      */}
      Browse
    </div>
  );
};

export default Browse;
