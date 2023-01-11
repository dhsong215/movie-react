import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

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
  }, [params]);

  const Details = () => {
    return (
      <div className={styles.container}>
        <img
          src={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
          alt={detail.backdrop_path}
        />
        <div>
          <h1 className={styles.title}>{detail.title}</h1>
          {detail.tagline ? <h3>"{detail.tagline}"</h3> : null}
          <div className={styles.genre}>
            {detail.genres.map((item, index) => (
              <p key={index}>{item.name}</p>
            ))}
          </div>
          <hr></hr>
          <div className={styles.overview}>
            <p>줄거리</p>
            <p>{detail.overview}</p>
          </div>
          <br></br>
          <div>개봉일 : {detail.release_date}</div>
          <div>런타임 : {detail.runtime}분</div>
          <br></br>
        </div>
      </div>
    );
  };

  return <div>{loading ? "loading" : <Details />}</div>;
};

export default Detail;
