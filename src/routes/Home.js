import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [index, setIndex] = useState("day");
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const onClickDay = () => {
    setIndex("day");
  };
  const onClickWeek = () => {
    setIndex("week");
  };

  useEffect(() => {
    const getMovies = async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/trending/movie/${index}?api_key=${API_KEY}`
        )
      ).json();
      setMovies(response.results);
      setLoading(false);
    };
    getMovies();
  }, [index]);

  return (
    <div className={styles.container}>
      <nav className={styles.top_bar}>
        <button
          onClick={onClickDay}
          className={`${styles.top_bar_button} ${
            index === "day" ? styles.top_bar_selected : null
          }`}
        >
          Trending Movie Today
        </button>
        <button
          onClick={onClickWeek}
          className={`${styles.top_bar_button} ${
            index === "week" ? styles.top_bar_selected : null
          }`}
        >
          Trending Movie Weekly
        </button>
      </nav>

      {loading ? "loading" : null}

      <div className={styles.movies}>
        {movies.map((item, index) => (
          <Link to={`/movie/${item.id}`}>
            <Movie
              key={item.id}
              index={index}
              id={item.id}
              imgSrc={`https://image.tmdb.org/t/p/w400${item.poster_path}`}
              imgAlt={item.id}
              title={item.title}
              overview={item.overview}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
