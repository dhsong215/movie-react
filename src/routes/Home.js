import { useState, useEffect } from "react";
import Movie from "../components/Movie";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await (
        await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=bbbb0a1d7e005e258af9072da3838e01"
        )
      ).json();
      setMovies(response.results);
      setLoading(false);
    };
    getMovies();
  }, []);

  return (
    <div>
      <h1>일간 순위</h1>
      {loading ? "loading" : null}
      <div>
        {movies.map((item, index) => (
          <Movie
            key={item.id}
            index={index}
            id={item.id}
            imgSrc={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
            imgAlt={item.id}
            title={item.title}
            overview={item.overview}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
