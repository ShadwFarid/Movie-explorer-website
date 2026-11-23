
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-[#0B0D13] border-t border-gray-800 mt-20 px-8 py-12">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and Description */}
        <div>

          <h2 className="text-2xl font-bold text-[#F5C518]">
            Movie<span className="text-white">Explorer</span>
          </h2>

          <p className="text-gray-400 mt-4 leading-relaxed">
            Discover amazing movies, explore new stories,
            and save your favorite films in one place.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-white font-bold text-lg mb-4">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3">

            <Link to="/" className="text-gray-400 hover:text-[#F5C518] transition">
              Home
            </Link>

            <Link to="/movies" className="text-gray-400 hover:text-[#F5C518] transition">
              Movies
            </Link>

            <Link to="/favorites" className="text-gray-400 hover:text-[#F5C518] transition">
              Favorites
            </Link>

          </div>

        </div>

        {/* About */}
        <div>

          <h3 className="text-white font-bold text-lg mb-4">
            About Us
          </h3>

          <p className="text-gray-400 leading-relaxed">
            Movie Explorer is a movie discovery application
            created with React to help users find their next
            favorite movie.
          </p>

        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-10 pt-6 text-center">

        <p className="text-gray-500 text-sm">
          © 2026 Movie Explorer. All rights reserved.
        </p>

        <p className="text-gray-500 text-xs mt-3">
          This product uses the TMDB API but is not endorsed or certified by TMDB.
        </p>

      </div>

    </footer>
  );
}

export default Footer;
