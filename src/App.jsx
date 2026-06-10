import { useEffect, useState } from "react";
import "./App.css";
import {BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const API_URL = "https://www.omdbapi.com/?apikey=932ec934";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  const searchMovie = async (title) => {

    if (!title || title.trim() === "") {
      setMovies([]);
      return;
    }

    try {
      setIsloading(true)

      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      // console.log(data);
      setMovies(data.Search || []);
    } catch (error) {
      console.log("Error searching movies", error);
    } finally {
      setIsloading(false)
    }
  };

  useEffect(() => {
    searchMovie();
  }, []);

  function filterBooks(filter) {
    console.log(filter)
    if (filter === 'NEWEST_TO_OLDEST') {
      setMovies(movies.slice().sort((a, b) => parseInt(b.Year) - parseInt(a.Year)))
    }
    if (filter === 'OLDEST_TO_NEWEST') {
      setMovies(movies.slice().sort((a, b) => parseInt(a.Year) - parseInt(b.Year)))
    }
    if (filter === 'A_TO_Z') {
      setMovies(movies.slice().sort((a, b) => a.Title.localeCompare(b.Title)))
    }
    if (filter === 'Z_TO_A') {
      setMovies(movies.slice().sort((a, b) => b.Title.localeCompare(a.Title)))
    }
  }

  return (
    <BrowserRouter>
      <div className="App__container">
        <Navbar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setMovies={setMovies}
          searchMovie={searchMovie}
        />
        <main className="main__content">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                movies={movies}
                isLoading={isLoading}
                filterBooks={filterBooks}
              />
            }
          />
          <Route path="/login" element={ <Login />} />
          <Route path="/signup" element={ <SignUp />} />
          <Route path="/:id" element={<MovieDetail/>}></Route>
        </Routes>
        </main>
       <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
