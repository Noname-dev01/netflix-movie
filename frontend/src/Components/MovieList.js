import React, { Fragment, useContext } from "react";
import { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Pagination from "react-js-pagination";
import { StoreContext } from "../ThemeContext";
const MovieList = () => {
  let { movie, page, totalPage, changePage, currentGenres, filterType, originalMovie, keyword } =
    useContext(StoreContext);

  useEffect(() => {
    getDataFromAPI(1);
    page[1](1);
    return () => {};
  }, [keyword[0]]);
  const getDataFromAPI = async (numPage) => {
    let API_KEY = process.env.REACT_APP_API_KEY;

    let url = new URL(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${numPage}`);
    if (keyword[0] !== "") {
      url.searchParams.set("query", keyword[0]);
    } else {
      url = new URL(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${numPage}`);
    }

    let res = await axios.get(url);
    movie[1](res.data.results);
    originalMovie[1](res.data.results);
    totalPage[1](res.data.total_pages);
  };
  changePage = (numPage) => {
    page[1](numPage);

    getDataFromAPI(numPage);
  };
  return <div>MovieList</div>;
};

export default MovieList;
