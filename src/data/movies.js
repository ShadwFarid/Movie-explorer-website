const movies = [
  {
    id: 1,
    title: "The Dark Knight",
    year: 2008,
    rating: 9.0,
    genre: "action",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    overview: "Batman faces the Joker in Gotham City."
  },
  {
    id: 2,
    title: "The Lord of the Rings",
    year: 2001,
    rating: 8.9,
    genre: "adventure",
    poster: "https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    overview: "A journey to destroy a powerful ring."
  },
  {
    id: 3,
    title: "Spider-Man: Into the Spider-Verse",
    year: 2018,
    rating: 8.4,
    genre: "animation",
    poster: "https://image.tmdb.org/t/p/w500/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    overview: "A young Spider-Man discovers a multiverse."
  },
  {id: 4,
    title: "Inception",
    year: 2010,
    rating: 8.8,
    poster: "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    overview: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    backdrop: "YOUR_WIDE_BACKDROP_URL"
  },
  {
    id: 5,
    title: "The Mask",
    year: 1994,
    rating: 6.9,
    genre: "comedy",
    poster: "https://image.tmdb.org/t/p/w500/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    overview: "A magical mask changes an ordinary man's life."
  },
  {
    id: 8,
    title: "The Conjuring",
    year: 2013,
    rating: 7.5,
    genre: "horror",
    poster: "https://image.tmdb.org/t/p/w500/wVYREutTvI2tmxr6ujrHT704wGF.jpg",
    overview: "Paranormal investigators explore a haunted house."
  },
  {
    id: 9,
    title: "Titanic",
    year: 1997,
    rating: 7.9,
    genre: "romance",
    poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
    overview: "A love story aboard the famous ship."
  },
  {
    id: 10,
    title: "Interstellar",
    year: 2014,
    rating: 8.7,
    genre: "sci-fi",
    poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    overview: "A space journey to find a new home for humanity."
  },
  {
    id: 11,
    title: "Se7en",
    year: 1995,
    rating: 8.6,
    genre: "thriller",
    poster: "https://image.tmdb.org/t/p/w500/6yoghtyTpznpBik8EngEmJskVUO.jpg",
    overview: "Two detectives investigate a series of mysterious murders."
  },
  {
    id: 12,
    title: "Avengers: Endgame",
    year: 2019,
    rating: 8.4,
    genre: "action",
    poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    overview: "The Avengers attempt to reverse the events of Infinity War."
  },
  {
    id: 13,
    title: "Jumanji",
    year: 1995,
    rating: 7.1,
    genre: "adventure",
    poster: "https://image.tmdb.org/t/p/w500/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
    overview: "A mysterious board game brings its dangers to life."
  },
  {
    id: 14,
    title: "Finding Nemo",
    year: 2003,
    rating: 8.2,
    genre: "animation",
    poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg",
    overview: "A father searches the ocean for his missing son."
  },
  {
    id: 15,
    title: "The Hangover",
    year: 2009,
    rating: 7.7,
    genre: "comedy",
    poster: "https://image.tmdb.org/t/p/w500/uluhlXubGu1VxU63X9VHCLWDAYP.jpg",
    overview: "Friends try to remember a crazy night in Las Vegas."
  },
  {
    id: 16,
    title: "Joker",
    year: 2019,
    rating: 8.4,
    genre: "crime",
    poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    overview: "A troubled man transforms into Gotham's Joker."
  },
  {
    id: 18,
    title: "Fantastic Beasts",
    year: 2016,
    rating: 7.2,
    genre: "fantasy",
    poster: "https://image.tmdb.org/t/p/w500/h6NYfVUyM6CDURtZSnBpz647Ldd.jpg",
    overview: "A magical adventure in a world of fantastic creatures."
  },
  {
    id: 19,
    title: "A Quiet Place",
    year: 2018,
    rating: 7.5,
    genre: "horror",
    poster: "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
    overview: "A family must survive in silence."
  },
  {
    id: 21,
    title: "The Matrix",
    year: 1999,
    rating: 8.7,
    genre: "sci-fi",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    overview: "A hacker discovers the truth about his reality."
  },
  {
    id: 22,
    title: "Shutter Island",
    year: 2010,
    rating: 8.2,
    genre: "thriller",
    poster: "https://image.tmdb.org/t/p/w500/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg",
    overview: "A detective investigates a disappearance on an island."
  }
  
];

export const trendingMovies = [
  movies[1],
  movies[2],
  movies[3]
];


export default movies;
