import { useNavigate } from "react-router-dom";



function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  const { title, year, rating, poster } = movie;
  const navigate = useNavigate();

  return (
    <div className="bg-[#1C202B] rounded-xl overflow-hidden border border-gray-800 hover:scale-[1.03] transition duration-300"
        >

      <img
        src={poster}
        alt={title}
        className="w-full h-[280px] object-cover"
         onClick={() => navigate(`/movies/${movie.id}`)}
      />

      <div className="p-4">

        <div className="flex justify-between items-center">

          <h2 className="text-white text-lg font-bold truncate">
            {title}
          </h2>

          <button
            onClick={() => onToggleFavorite(movie)}
            className="text-2xl"
          >
            {isFavorite ? "❤️" : "🤍"}
          </button>

        </div>

        <div className="flex justify-between items-center mt-3">

          <span className="text-gray-400 text-sm">
            {year}
          </span>

          <span className="text-[#F5C518] font-semibold text-sm">
            ⭐ {rating}
          </span>

        </div>

      </div>

    </div>
  );
}

export default MovieCard;
