import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faImdb } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Badge } from "react-bootstrap";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
import { Navigate, useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/movies/${item.id}`);
  };
  return (
    <a
      className="card "
      style={{
        backgroundImage: "url(" + `https://image.tmdb.org/t/p/original//${item.poster_path}` + ")",
      }}
      onClick={showDetail}
    >
      <div className="overlay">
        <div className="items"></div>
        <div className="items head">
          <p>{item.title}</p>
          <hr />
        </div>
        <ul className="card-slider-genres">
          {item.genre_ids.map((id) => (
            <li>
              <Badge key={id} className="genre" bg="danger">
                {genreList.find((item) => item.id == id).name}
              </Badge>
            </li>
          ))}
        </ul>
        <div className="underline-container">
          <FontAwesomeIcon className="fab fa-imdb imb-icon" icon={faImdb} />
          <span className="fab fa-imdb imb-icon">{item.vote_average}</span>

          <span className="eightteen">{item.adult ? "청불" : "Under 18"}</span>
        </div>
      </div>
    </a>
  );
};

export default MovieCard;
