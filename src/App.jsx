import { useEffect, useState } from "react";
import "./App.css";
import {HashRouter, BrowserRouter, Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import MovieDetail from "./components/MovieDetail";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";


const API_URL = "http://www.omdbapi.com/?apikey=932ec934";

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
      console.log(data);
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

  return (
    <HashRouter>
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
    </HashRouter>
  );
}

export default App;
