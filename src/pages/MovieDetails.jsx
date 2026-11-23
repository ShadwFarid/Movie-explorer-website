
import { useParams, useNavigate } from "react-router-dom";

function MovieDetails({ movies, favorites, toggleFavorite }) {

  const { id } = useParams();
  const movie = movies.find((item) => String(item.id) === id);
  const navigate = useNavigate();
// console.log("URL ID:", id);
// console.log("Movies:", movies);
// console.log("Found Movie:", movie);
const isFavorite = movie
  ? favorites.some((fav) => fav.id === movie.id)
  : false;

  return (
  <div className="bg-[#0F1117] min-h-screen text-white p-8">

    {movie ? (
      <>
      <div
        className="relative h-[450px] bg-cover bg-center "
        style={{ backgroundImage: `url(${movie.poster})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 p-8">
        <h1 className="text-4xl font-bold mb-4">
          {movie.title}
        </h1>

        <img
          src={movie.poster}
          alt={movie.title}
          className="w-64 rounded-xl mb-5"
        />

        <p>Year: {movie.year}</p>
        <p>Rating: ⭐ {movie.rating}</p>
        <p>Genre: {movie.genre}</p>

        <p className="text-gray-400 mt-4 max-w-2xl">
          {movie.overview}
        </p>
        <button
          onClick={() => navigate("/movies")}
          className="mt-6 px-6 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          ← Back to Movies
        </button>
        <button
          onClick={() => toggleFavorite(movie)}
          title={isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          className="mt-4 ml-3 text-4xl hover:scale-125 transition duration-300"
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
      </div>
       </>
    ) : (
      <h2>Movie Not Found</h2>
    )}
  
  </div>
  
);}
export default MovieDetails;
