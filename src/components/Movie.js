import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "../css/Movie.module.css";

const Movie = ({ index, id, imgSrc, imgAlt, title, overview }) => {
  return (
    <div className={styles.movie} href={`/movie/${id}`}>
      <div>
        <img src={imgSrc} alt={imgAlt} className={styles.movie_img} />
      </div>
      <div>
        <h3 className={styles.movie_title}>
          #{index + 1} {title}
        </h3>
        <span className={styles.movie_overview}>{overview}</span>
      </div>
    </div>
  );
};

Movie.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Movie;
