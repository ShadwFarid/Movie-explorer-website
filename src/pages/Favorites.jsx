
import MovieCard from "../components/MovieCard";
import { Link } from "react-router-dom";

function Favorites({ favorites, toggleFavorite }) {

  return (
    <div className="min-h-screen bg-[#0F1117] px-8 py-10">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white">
          My Favorites
        </h1>

        <p className="text-gray-400 mt-2">
          You have {favorites.length} favorite movies.
        </p>
      </div>

      {favorites.length === 0 ? (

        <div className="text-center py-20">

          <h2 className="text-2xl text-white mb-4">
            No Favorites Yet 
          </h2>

          <p className="text-gray-400 mb-6">
            Start adding movies you love!
          </p>

          <Link
           to="/movies"
            className="bg-[#F5C518] text-black px-6 py-3 rounded-lg font-semibold"
          >
            Explore Movies
          </Link>

        </div>

      ) : (

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {favorites.map((movie) => (

            <MovieCard
              key={movie.id}
              movie={movie}
              isFavorite={true}
              onToggleFavorite={toggleFavorite}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default Favorites;
