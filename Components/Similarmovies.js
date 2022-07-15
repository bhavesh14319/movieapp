import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styles from "../styles/similar.module.css";
import { useRouter } from 'next/router'
const Similarmovies = (props) => {
    const router = useRouter()
  // console.log(props.Movies);
  return (
    <div>
      <h2 className={styles.Maintitle}>Similar Movies</h2>
      <Carousel className={styles.mainContainer}>
        {props.Movies?.map((movie) => {
          return (
            
            <div className={styles.carouselContainer} onClick={()=>{router.push(`/${movie.id}`)}}>
                {console.log(movie.id)}
              <img
                className={styles.carouselImage}
                src={"https://image.tmdb.org/t/p/w200" + movie?.poster_path}
                alt=""
              />
              <div className={styles.infoContainer}>
                <h2 className={styles.title}>{movie?.original_title}</h2>
                <p className={styles.descrtiption}>{movie.overview}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Similarmovies;
