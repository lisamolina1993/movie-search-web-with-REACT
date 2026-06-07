import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import loadingIcon from '../assets/loading-svgrepo-com.svg'

const API_URL = "https://www.omdbapi.com/?apikey=932ec934";

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const fetchMovieDetail = async () => {
    const response = await fetch(`${API_URL}&i=${id}&plot`);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchMovieDetail();
  }, [id]);

  if (!movie) {
    return (
    <div className="spinner__container">
        <img className="spinner__img" src={loadingIcon} alt="Loading data..." />
    </div>
    )
  }

  return (
    <div className="container">
      <div className="row">
        <div className="detail__container">
          <div className="img__container">
            <img className="movie__img" src={movie.Poster} alt={movie.Title} />
          </div>
          <div className="description__info">
            <h2 className="description__title">{movie.Title}</h2>
            <p className="description__para">{movie.Plot}</p>
            <p className="description__para">Cast: {movie.Actors}</p>
            <p className="description__para">Runtime: {movie.Runtime}</p>
            <div className="list__container">
                <ul className="listing">
                    <li><strong>Directors: </strong>{movie.Director}</li>
                    <li><strong>Release Date: </strong>{movie.Released}</li>
                    <li><strong>Genre: </strong>{movie.Genre}</li>
                    <li><strong>IMDB rating: </strong>{movie.imdbRating}</li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
