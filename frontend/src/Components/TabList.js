import * as React from "react";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Container } from "react-bootstrap";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [movieReview, setMovieReview] = useState(null);
  const [movieRelated, setMovieRelated] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.movie);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const getMovieReviewFromAPI = async () => {
    let API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("review", data);
    setMovieReview(data);
  };
  const getMovieRelatedFromAPI = async () => {
    let API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("related", data.results);
    setMovieRelated(data.results);
  };
  useEffect(() => {
    getMovieReviewFromAPI();
    getMovieRelatedFromAPI();
  }, []);
  return (
    <>
      {movieReview === null || movieRelated === null ? (
        <ClipLoader
          className="loading cssOverride"
          color="#ff0000"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab className="tab tab01" label={`REVIEWS (${movieReview?.results.length})`} {...a11yProps(0)} />
              <Tab className="tab tab02" label={`RELATED MOVIES (${movieRelated?.length})`} {...a11yProps(1)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div className="desc-text review-text">
              <div className="product-commnets">
                {movieReview?.results.map((review) => {
                  return (
                    <div className="product-commnets-list mb-25 pb-15">
                      <div className="pro-commnets-text">
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <div id="profile6" role="tabpanel" aria-labelledby="profile-tab6">
              <div className="related-movies">
                <Container className="container-md">
                  <Row className="mt-50">
                    <Col className="col-xl-12 col-lg-12 rowIn-col">
                      {movieRelated?.map((movie) => {
                        return (
                          <a
                            className="card "
                            style={{
                              backgroundImage:
                                "url(" + `https://image.tmdb.org/t/p/original//${movie.poster_path}` + ")",
                            }}
                          >
                            <div className="overlay">
                              <div className="items"></div>
                              <div className="items head">
                                <p>{movie.title}</p>
                                <hr />
                              </div>
                              <ul className="card-slider-genres"></ul>
                              {/* <div>
                                <span>{movie.vote_average}</span>
                                <span>{movie.adult ? "청불" : "Under 18"}</span>
                              </div> */}
                            </div>
                          </a>
                        );
                      })}
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </CustomTabPanel>
        </Box>
      )}
    </>
  );
}
