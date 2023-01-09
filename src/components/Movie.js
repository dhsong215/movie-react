import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ index, id, imgSrc, imgAlt, title, overview }) => {
  return (
    <div>
      <div>
        <h2>{index + 1}등</h2>
        <Link to={`/movie/${id}`}>
          <img src={imgSrc} alt={imgAlt} />
        </Link>
      </div>
      <div>
        <h3>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h3>
        <span>{overview}</span>
      </div>
      <hr></hr>
    </div>
  );
};

Movie.propTypes = {
  imgSrc: PropTypes.string.isRequired,
};

export default Movie;
