import React from "react";
import placeholderIcon from '../assets/placeholder.png'
import { Link } from "react-router";

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {

  return (
   

        
          <figure className="movie__list" key={imdbID}>
            <img
              src={Poster !== 'N/A' ? Poster : placeholderIcon}
              alt={Title}
            />
            <figcaption className="fig__caption">{Type}</figcaption>
            <figcaption className="fig__caption">{Year}</figcaption>
            <figcaption className="fig__caption fig__caption--title">
              {Title}
             </figcaption>
             <Link className="description" to={`/${imdbID}`}>Movie Description</Link>
          </figure>
        
      

  );
};

export default MovieCard;
