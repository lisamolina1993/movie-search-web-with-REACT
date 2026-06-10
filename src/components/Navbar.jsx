import React, { useEffect, useState } from "react";
// import logo from "../assets/cinema-clapper-svgrepo-com.svg";
import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from '../assets/movie-logo-svg.svg'

const API_URL = "https://www.omdbapi.com/?apikey=932ec934";

const Navbar = ({ searchTerm, setSearchTerm, searchMovie}) => {

  function onSearchKeyPress(key) {
    if(key === 'Enter') {
      searchMovie(searchTerm)
    }
  }

  return (
    <div className="row">
      <div className="nav__wrapper">
        <figure>
          <img className="logo" src={logo} alt="logo" />
        </figure>
        <div className="nav__links">
          <ul className="nav__lists">
            <li>
                <Link className="btn__link nav__link " to='/signup'> Sign up</Link>
            </li>
            <li>
                <Link className="btn__link nav__link " to='/login'> Log in</Link>
            </li>
            <input onKeyDown={(event) =>  onSearchKeyPress(event.key)}
              className="search__input"
              type="text"
              id="searchInput"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Type Movie Title"
            />
            <button 
              onClick={() => searchMovie(searchTerm)}
              className="search_btn"
              id="searchButton"
            >
              <FontAwesomeIcon className="search_icon" icon={faMagnifyingGlass}></FontAwesomeIcon>
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

/* {console.log("key pressed", event.key); - this line helps to see if the onkeyDown function is wokring*/ 