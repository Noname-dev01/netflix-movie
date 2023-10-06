import React from "react";
import Carousel from "react-multi-carousel";
import MovieCard from "./MovieCard";
import Pagination from "react-js-pagination";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 4,
    partialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    partialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 2,
    partialVisibilityGutter: 30,
  },
};
const MovieSlide = ({ movies }) => {
  console.log("movies : ", movies);
  return (
    <div>
      <Carousel responsive={responsive} rewind rewindWithAnimation swipeable={false} slidesToSlide={1}>
        {movies.results.map((item) => (
          <MovieCard key={item} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSlide;
