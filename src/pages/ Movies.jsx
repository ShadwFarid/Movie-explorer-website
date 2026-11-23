import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

function Movies({ movies, favorites, toggleFavorite } ) {
    const [selectedGenre,setSelectedGenre]=useState("all");
    const [sortBy, setSortBy] = useState("popularity");
    const [searchTerm, setSearchTerm] = useState(""); 
    const [searchParams, setSearchParams] = useSearchParams();
    const [visibleCount, setVisibleCount] = useState(4);
    


    useEffect(() => {
      setSearchTerm(searchParams.get("search") || "");
    }, [searchParams]);


    const filteredMovies = movies.filter((movie) =>{
      const matchesGenre = selectedGenre ==="all" || movie.genre === selectedGenre ;
      const matchesSearch = movie.title.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesGenre && matchesSearch;
    });
    const sortedMovies = [...filteredMovies].sort((a,b)=>{
      if (sortBy==="ratingH"){
        return b.rating - a.rating;
        }
        if (sortBy==="ratingL"){
        return a.rating - b.rating;
        }
      if (sortBy==="newest"){
        return b.year - a.year;
        }
      if (sortBy==="oldest"){
        return a.year - b.year;
        }
      return 0;
    });
    const visibleMovies = sortedMovies.slice(0, visibleCount);
    useEffect(() => {
      setVisibleCount(4);
    }, [selectedGenre, sortBy, searchTerm]);

    function ClearFilter (){
      setSelectedGenre("all");
      setSortBy("popularity");
      setSearchTerm("");
      setSearchParams({});
      

    }
    function handleLoadMore() {
  setVisibleCount((prevCount) => prevCount + 4);
}

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">

      <div id="Page_Title" className="relative overflow-hidden px-8 py-8 bg-gradient-to-r from-[#111827] via-[#17152B] to-[#25133D]">
        <div className="absolute right-10 top-0 text-purple-400/20 text-8xl"></div>

        <div className="relative z-10">
          <h1 className="text-4xl font-bold border-l-4 border-yellow-400 pl-4">
            All Movies
          </h1>

          <p className="text-gray-300 mt-3 ml-5">
            Discover, search, filter, and sort your favorite movies.
          </p>
        </div>
      </div>

      <div  id="Search_Filters" className="mx-6 mt-7 p-4 rounded-2xl bg-[#171C27] border border-gray-800">

        <div className="flex flex-wrap items-center gap-5">

          <div id="Search" className="flex-1 min-w-[220px]">
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e)=> setSearchTerm (e.target.value)}
              className="w-full px-5 py-3 rounded-full bg-[#252B38] text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <div className="hidden md:block h-9 w-px bg-gray-700"></div>


          <div id="Filter" className="flex items-center gap-3">
            <label className="font-semibold">Genre:</label>

            <select
              name="genre"
              value={selectedGenre}
              onChange={(e)=>setSelectedGenre(e.target.value)}
              className="bg-[#171C27] border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-yellow-400"
            >
              <option value="all">All Genres</option>
              <option value="action">Action</option>
              <option value="adventure">Adventure</option>
              <option value="animation">Animation</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
              <option value="drama">Drama</option>
              <option value="fantasy">Fantasy</option>
              <option value="horror">Horror</option>
              <option value="romance">Romance</option>
              <option value="sci-fi">Sci-Fi</option>
              <option value="thriller">Thriller</option>
            </select>
          </div>

          <div className="hidden md:block h-9 w-px bg-gray-700"></div>

          <div id="Sort_By" className="flex items-center gap-3">
            <label className="font-semibold">Sort By:</label>

            <select
              name="sort"
              value={sortBy}
              onChange={(e)=>setSortBy(e.target.value)}
              className="bg-[#171C27] border border-gray-600 rounded-full px-5 py-3 outline-none focus:border-yellow-400"
            >
              <option value="popularity">Popularity</option>
              <option value="ratingH">Rating (High to Low)</option>
              <option value="ratingL">Rating (Low to High)</option>
              <option value="newest">Release Date (Newest)</option>
              <option value="oldest">Release Date (Oldest)</option>
            </select>
          </div>

          <button
            id="Clear_bt"
            type="button"
            onClick={ClearFilter}
            className="px-5 py-3 rounded-full border border-gray-500 hover:bg-yellow-400 hover:text-black hover:border-yellow-400 transition duration-300"
          >
            ↻ Clear Filters
          </button>

        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-6 mt-7">

        {sortedMovies.length > 0?(
        visibleMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some(
              (fav) => fav.id === movie.id
            )}
            onToggleFavorite={toggleFavorite}
          />
        ))):(
          <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
              <div className="text-6xl mb-4">🎬</div>

              <h2 className="text-2xl font-bold text-white mb-2">
                No Movies Found
              </h2>

              <p className="text-gray-400 mb-5">
                Sorry, we couldn't find any movies matching your search.
              </p>
          </div>
          
        )}

      </div>
      {visibleCount < sortedMovies.length && (
      <div className="flex justify-center mt-10 mb-12">
        <button
          onClick={handleLoadMore}
          className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:bg-yellow-300 transition"
        >
          Load More
        </button>
      </div>
    )}

    </div>
  );
}

export default Movies;
