
import Navbar from './components/Navbar'
import './App.css'
import Home from './pages/Home';
import Movies from './pages/ Movies';
import Favorites from "./pages/Favorites";
import { Route ,Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import { useState, useEffect } from "react";
import movies from "./data/movies";
import Footer from "./components/Footer";


function App() {
 const [favorites, setFavorites] = useState(() => {
  const savedFavorites = localStorage.getItem("favorites");

  return savedFavorites ? JSON.parse(savedFavorites) : [];
});
function toggleFavorite(movie) {

    const isAlreadyFavorite = favorites.some(
      (fav) => fav.id === movie.id
    );
    if (isAlreadyFavorite) {
      setFavorites(
        favorites.filter((fav) => fav.id !== movie.id)
      );
    } else {
      setFavorites([...favorites, movie]);
    }
  }
useEffect(() => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}, [favorites]);


  return (
    <>
    <Navbar/>


   <Routes>
        <Route
            path="/"
            element={
              <Home
                movies={movies}
                favorites={favorites}
                toggleFavorite={toggleFavorite}/>
            }/>
        <Route path="/movies" element={<Movies movies={movies} 
                              favorites={favorites}
                              toggleFavorite={toggleFavorite} />} />
        <Route path="/favorites" element={<Favorites  favorites={favorites}
                                                      toggleFavorite={toggleFavorite}/>} />
        <Route path="/movies/:id" element={<MovieDetails  movies={movies}
                                                          favorites={favorites}
                                                          toggleFavorite={toggleFavorite}/>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App;
