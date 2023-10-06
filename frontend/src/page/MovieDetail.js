import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReactModal from "react-modal";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import TabList from "../Components/TabList";

const MovieDetail = () => {
  // 아이디값 가져오기
  const [modalOpen, setModalOpen] = useState(false);
  const [trailer, setTrailer] = useState("");
  const [movies, setMovies] = useState(null);

  const { id } = useParams();
  console.log(id);
  const getMoviesDetail = async () => {
    let API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;

    let response = await fetch(url);
    let data = await response.json();
    console.log("movieDetail", data);
    setMovies(data);
  };

  const getTrailer = async () => {
    let API_KEY = process.env.REACT_APP_API_KEY;
    let url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("trailer", data);
    setTrailer(data.results[0]);
  };
  function closeModal() {
    setModalOpen(false);
  }
  function openModal() {
    setModalOpen(true);
  }
  useEffect(() => {
    getMoviesDetail();
    getTrailer();
  }, []);

  return (
    <div>
      <section
        className="breadcrumb-area"
        style={{
          backgroundImage:
            'url("https://images.hdqwalls.com/download/polygonal-abstract-red-dark-background-eo-1280x1024.jpg")',
        }}
      ></section>
      <Container>
        <Row>
          <Col className="detail-img">
            <img width={400} src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`} />
          </Col>
          <Col>
            <div>
              <h1 className="title">{movies?.title}</h1>
              <hr />
              <ul className="card-slider-genres">
                {movies?.genres.map((genres) => {
                  return <li>{genres.name}</li>;
                })}
              </ul>
              <hr />
              <h2>{movies?.tagline}</h2>
              <hr />
              <p>{movies?.overview}</p>
              <hr />
              <ul className="check-container">
                <li className="fab fa-imdb imb-icon">
                  <FontAwesomeIcon icon={faImdb} />
                  <span className="imb-score">{movies?.vote_average}</span>
                </li>
                <li className="fas fa-users users-icon">
                  <FontAwesomeIcon icon={faUser} />
                  <span className="imb-score">{movies?.popularity}</span>
                </li>
                <li>
                  <i className="material-icons">
                    {movies?.adult ? (
                      <span className="eightteen">18+</span>
                    ) : (
                      <span className="eightteen">Under 18</span>
                    )}
                  </i>
                </li>
              </ul>
            </div>
            <div id="model-btn-open" style={{ color: "#fe4536" }} onClick={() => openModal()}>
              MovieTrailer
            </div>
            <ReactModal isOpen={modalOpen} style={{ content: { backgroundColor: "#000" } }}>
              <div id="model-btn-close" style={{ color: "#fe4536" }} onClick={() => closeModal()}>
                X
              </div>
              <div className="trailer">
                <YouTube videoId={trailer.key} autoplay={1} width="100%" height="100%" />
              </div>
            </ReactModal>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <hr />
          <Col>
            <TabList apl={movies} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetail;
