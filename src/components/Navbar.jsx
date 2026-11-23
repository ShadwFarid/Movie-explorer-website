
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [showSearch,setShowSearch]= useState (false);
  const [searchTerm,setSearchTerm]= useState ("");

  const navigate= useNavigate();
  
  function handleSearch (e){
    e.preventDefault();
    if(setSearchTerm.trim !==""){
       navigate(`/movies?search=${encodeURIComponent(searchTerm)}`);
       setShowSearch(false);
    }
  }


  return (
    <nav className="bg-gray-900 border-b border-gray-900 px-8 py-5 flex items-center justify-between">


      <h1 className="text-2xl font-bold text-[#F5C518]">
        Movie<span className="text-white">Explorer</span>
      </h1>
      <div className="flex items-center gap-8 text-gray-300">
        <Link to="/" className="hover:text-[#F5C518] transition">
            Home
        </Link>
        <Link to="/movies" className="hover:text-[#F5C518] transition">
            Movies
        </Link>
        <Link to="/favorites" className="hover:text-[#F5C518] transition">
            Favorites
        </Link>
      </div>
      <button
       onClick={()=> setShowSearch(!showSearch)}
       className="text-white text-xl hover:text-[#F5C518] transition">
        🔍
      </button>
      {showSearch && (
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search movies..."
                  className="bg-[#252B38] text-white px-4 py-2 rounded-full outline-none"
                  autoFocus
                />
              </form>
            )}

    </nav>
  );
}

export default Navbar;
