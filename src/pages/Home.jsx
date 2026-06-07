import React from "react";
import MovieCard from "../components/MovieCard";
import loadingIcon from '../assets/loading-svgrepo-com.svg'

const Home = ({ movies, isLoading }) => {
  return (
    <>
        {isLoading ? (
            <div className="spinner__container">
                <img className="spinner__img" src={loadingIcon} alt="Loading data..." />
            </div>
        ) : movies.length > 0 ? (
        <div className="movies__wrapper">
          
            {movies.map((movie) => (
              
                <MovieCard key={movie.imdbID} movie={movie} />
              
            ))}
          </div>
        
        ) : (
        <div className="container">
          <div className="row">
            <div className="home__wrapper">
              <h1 className="welcome__title">Welcome to Movie Mania</h1>
              <h3 className="sub__title">Find your favorite movies</h3>
            </div>
          </div>
        </div>
        )}
     </>
  );
};

export default Home;

