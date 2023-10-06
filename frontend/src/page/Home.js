import React, { useEffect, CSSProperties } from "react";
import { movieAction } from "../redux/action/movieAction";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../Components/Banner";
import MovieSlide from "../Components/MovieSlide";
import ClipLoader from "react-spinners/ClipLoader";

const Home = () => {
  const dispatch = useDispatch();

  const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector((state) => state.movie);
  console.log("home", upComingMovies);
  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);
  // loading이 true면 loading 스피너를 보여주고 false면 데이터를 보여준다

  // true : 데이터 도착 전
  // false : 데이터 도착 후 , 에러 났을때
  if (loading) {
    return (
      <ClipLoader
        className="loading cssOverride"
        color="#ff0000"
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    );
  }
  return (
    <div>
      <Banner movie={popularMovies.results[Math.floor(Math.random() * popularMovies.results.length)]} />

      <div className="movie-container">
        <h1>Popular Movies</h1>
        <MovieSlide className="carousel slide" movies={popularMovies} />
        <h1>TopRated Movies</h1>
        <MovieSlide className="carousel slide" movies={topRatedMovies} />
        <h1>UpComing Movies</h1>
        <MovieSlide className="carousel slide" movies={upComingMovies} />
      </div>
    </div>
  );
};

export default Home;
