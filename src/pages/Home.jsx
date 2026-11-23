
import MovieCard from "../components/MovieCard";
import HeroSection from "../components/HeroSection";
import { trendingMovies } from "../data/movies";

function Home({ movies, favorites, toggleFavorite }) {
  return (
    <div className="min-h-screen bg-[#0F1117] px-8 py-10">
      {movies.length > 0 && (
      <HeroSection movie={movies[0]} />
    )}

      <h1 className="text-3xl font-bold text-white mb-8">
        Popular Movies
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some(
              (fav) => fav.id === movie.id
            )}
            onToggleFavorite={toggleFavorite}
          />
        ))}

      </div>

<section className="mt-16">

  <div className="flex items-center justify-between mb-8">

    <div>
      <h2 className="text-3xl font-bold text-white">
        Trending Movies
      </h2>

      <p className="text-gray-400 mt-2">
        Movies everyone is watching right now.
      </p>
    </div>

    <span className="text-[#F5C518] text-sm font-semibold">
      TRENDING 🔥
    </span>

  </div>

  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {trendingMovies.map((movie) => (

      <MovieCard
        key={movie.id}
        movie={movie}
        isFavorite={favorites.some(
          (fav) => fav.id === movie.id
        )}
        onToggleFavorite={toggleFavorite}
      />

    ))}

  </div>

</section>

    </div>
  );
}

export default Home;
