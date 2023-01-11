import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "../css/Home.module.css";

const Home = () => {
  const [topBarBtn, setTopBarBtn] = useState();
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
    <div className={styles.container}>
      <nav className={styles.top_bar}>
        <button
          className={`${styles.top_bar_button} ${styles.top_bar_button1}`}
        >
          Movie Today
        </button>
        <button
          className={`${styles.top_bar_button} ${styles.top_bar_button2}`}
        >
          Movie Weekly
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
