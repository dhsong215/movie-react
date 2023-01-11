import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "../css/Detail.module.css";

const Detail = () => {
  const [detail, setDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const getDetail = async () => {
      const response = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/${params.id}?api_key=bbbb0a1d7e005e258af9072da3838e01&language=ko-KR`
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
        <span> </span>
        <div>
          <h1>{detail.title}</h1>
          {detail.tagline ? <h3>"{detail.tagline}"</h3> : null}
          <div>
            <span>장르 : </span>
            {detail.genres.map((item, index) => (
              <span key={index}>{item.name} </span>
            ))}
          </div>
          <br></br>
          <div>
            <span>줄거리 : {detail.overview}</span>
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
