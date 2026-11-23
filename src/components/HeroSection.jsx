
import { Link } from "react-router-dom";

function HeroSection({ movie }) {

  if (!movie) return null;

  return (
    <section
      className="relative min-h-[480px] flex items-center bg-cover bg-center rounded-2xl overflow-hidden"
      style={{
        backgroundImage: `url(${movie.backdrop || movie.poster})`
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F1117] via-[#0F1117]/80 to-transparent" />

      {/* Movie Information */}
      <div className="relative z-10 max-w-2xl px-8 md:px-14 py-16">

        <span className="text-[#F5C518] font-semibold uppercase tracking-widest text-sm">
          Featured Movie
        </span>

        <h1 className="text-4xl md:text-6xl font-bold text-white mt-4">
          {movie.title}
        </h1>

        <div className="flex items-center gap-4 mt-5 text-gray-300">

          <span>{movie.year}</span>

          <span className="text-[#F5C518]">
            ⭐ {movie.rating}
          </span>

        </div>

        <p className="text-gray-300 mt-5 leading-relaxed">
          {movie.overview}
        </p>

        <div className="flex gap-4 mt-8">

          <Link
            to={`/movies/${movie.id}`}
            className="bg-[#F5C518] text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition"
          >
            View Details
          </Link>

          <Link
            to="/movies"
            className="border border-white/40 text-white px-6 py-3 rounded-lg hover:bg-white/10 transition"
          >
            Explore Movies
          </Link>

        </div>

      </div>

    </section>
  );
}

export default HeroSection;
