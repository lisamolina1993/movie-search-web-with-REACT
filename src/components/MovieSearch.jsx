// import React, { useState } from "react";

// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=932ec934";

// const MovieSearch = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [movies, setMovies] = useState([]);

//   useEffect(() => {
//     searchMovie();
//   }, []);

//   const searchMovie = async (title) => {
//     try {
//       const response = await fetch(`${API_URL}&s=${title}`);
//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.log("Error searching movies", error);
//     }
//   };

//   return <div></div>;
// };

export default MovieSearch;
