import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await (
      await fetch(
        "https://api.themoviedb.org/3/trending/movie/day?api_key=bbbb0a1d7e005e258af9072da3838e01"
      )
    ).json();
    await setMovies(response.results);
    await setLoading(false);
  };

  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);

  return (
    <div>
      <h1>Today's Movie ranking</h1>
      {loading ? "loading" : null}
      <div>
        {movies.map((item, index) => (
          <div key={index}>
            <h2>{index + 1}등</h2>
            <img
              src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
              alt={item.id}
            />
            <br></br>
            <h3>{item.title}</h3>
            <p>{item.overview}</p>
            <hr></hr>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
