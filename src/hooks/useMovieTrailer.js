import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailerVedio } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const trailerVedio = useSelector((store) => store.movies.trailerVedio);

  // fetch the trailer vedio from the API and Updating the movies store with trailer vedio
  const getMovieVedio = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const jsonData = await data.json();
    // console.log(jsonData);

    const filteredData = jsonData.results.filter(
      (vedio) => vedio.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : jsonData.results[0];
    // console.log(trailer);
    dispatch(addTrailerVedio(trailer));
  };

  useEffect(() => {
    if (!trailerVedio) getMovieVedio();
  }, []);
};

export default useMovieTrailer;
