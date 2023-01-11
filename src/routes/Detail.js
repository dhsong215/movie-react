import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../css/Detail.module.css";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const API_KEY = process.env.REACT_APP_API_KEY;

const Detail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=${API_KEY}&language=ko-KR`
        )
      ).json();
      setDetail(response);
      setLoading(false);
    };
    getDetail();
    document.body.style.backgroundColor = "#000000e8";
  }, [params]);

  const Details = () => {
    return (
      <div className={styles.container}>
        <Link className={styles.back_button} to="/">
          <FontAwesomeIcon icon={faArrowLeft} size="3x" />
        </Link>
        <img
          className={styles.cover_img}
          src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
          alt={detail.backdrop_path}
        />
        <div>
          <h1 className={styles.title}>{detail.title}</h1>
          {detail.tagline ? <h3>"{detail.tagline}"</h3> : null}
          <div className={styles.genre}>
            {detail.genres.map((item) => (
              <p key={item.name}>{item.name}</p>
            ))}
          </div>
          <hr></hr>
          <div className={styles.overview}>
            <p>줄거리</p>
            <p>{detail.overview}</p>
          </div>
          <br></br>
          <div className={styles.release_date}>
            개봉일 : {detail.release_date}
          </div>
          <div className={styles.runtime}>런타임 : {detail.runtime}분</div>
        </div>
      </div>
    );
  };

  return <div>{loading ? "loading" : <Details />}</div>;
};

export default Detail;
