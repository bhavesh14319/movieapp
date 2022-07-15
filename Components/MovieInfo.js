import React from "react";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";
import styles from "../styles/Detail.module.css";
import Review from "./Review";
import Similarmovies from "./Similarmovies";


const MovieInfo = ({ movieId }) => {

  const [data, setData] = useState({});
  const [reviews, setReviews] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);

  // fetch data of particular movie using its id and set data state
  async function getData() {
    if (movieId === 0) {
      return;
    } else {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "?api_key=db75be3f6da59e6c54d0b9f568d19d16"
      );
      let data = await res.json();
      setData(data);
       console.log(data)
    }
  }

  // fetch reviews of movie and set reviews state
  async function getReviews() {
    if (movieId === 0) {
      return;
    } else {
      let res = await fetch(
        "https://api.themoviedb.org/3/movie/" +
          movieId +
          "/reviews?api_key=db75be3f6da59e6c54d0b9f568d19d16"
      );
      let data = await res.json();
      setReviews(data.results);
      // console.log(reviews);
    }
  }

  // fetch similar movies and set similarMovies state
  async function getSimilarMovies(){
    if(movieId===0){
      return
    }else{
      let res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/similar?api_key=db75be3f6da59e6c54d0b9f568d19d16`)
      let data = await res.json();
      setSimilarMovies(data.results)
      console.log(`similar movies are`)
      // console.log(similarMovies)
      
      
    }
  }

  // call functions to fetch required data on component load
  useEffect(() => {
    getData();
    getReviews();
    getSimilarMovies();
  }, [movieId]);

  let str = "";
  // returns the genres of movie as comma separated string
  function getGeneres() {
    data.genres?.map((item) => {
      str = str + item.name + " , ";
    });

    return str.slice(0, str.length - 2);
  }

  // return original countries of movie as comma separated
  function getCountries() {
    str = "";
    data.production_countries?.map((item) => {
      str = str + item.name + " , ";
    });

    return str.slice(0, str.length - 2);
  }

  return (

    <>
    <div Key={data.id} className={`${styles.detailsContainer} `}>
      <div className={styles.basicInfoContainer}>
        <div className={styles.imgContainer}>
          {data.poster_path && (
            <img
              className={styles.poster}
              src={"https://image.tmdb.org/t/p/w400" + data?.poster_path}
              alt="Image"
            />
          )}
        </div>

        <div className={styles.info}>
          <p className={`${styles.language} ${styles.basicInfo}`}>
            <strong>Language: </strong>
            {data.original_language}
          </p>
          <h1 className={`${styles.title} ${styles.basicInfo}`}>
            {data.original_title}
          </h1>
          <p className={`${styles.description} ${styles.basicInfo}`}>
            <strong>Overview: </strong>
            {data.overview}
          </p>
          <p className={`${styles.popularity} ${styles.basicInfo}`}>
            <strong>Popularity:</strong> {data.popularity}
          </p>
          <p className={`${styles.genres} ${styles.basicInfo}`}>
            <strong>Generes: </strong>
            {getGeneres()}{" "}
          </p>
          <h3 className={`${styles.releaseDate} ${styles.basicInfo}`}>
            <strong>Release date: </strong>
            {data?.release_date}
          </h3>
          <p className={`${styles.originCountries} ${styles.basicInfo}`}>
            <strong>Production Countries: </strong>
            {getCountries()}
          </p>
          <p className={`${styles.voteCount} ${styles.basicInfo}`}>
            <strong>Vote Count: </strong>
            {data.vote_count}
          </p>
          <p className={`${styles.voteAverage} ${styles.basicInfo}`}>
            <strong>Vote Average: </strong>
            {data.vote_average}
          </p>
          <p className={`${styles.budget} ${styles.basicInfo}`}>
            <strong>Budget: </strong>$ {data.budget}
          </p>
          <p className={`${styles.revenue} ${styles.basicInfo}`}>
            <strong>Revenue: </strong>$ {data.revenue}
          </p>
          <p className={`${styles.homepageLink} ${styles.basicInfo}`}>
            <strong>Link To Homepage: </strong>{" "}
            <a href={data.homepage}>Visit Homepage</a>
          </p>
        </div>
      </div>

      <div className={styles.reviewsContainer}>
        <div className={styles.title}>
         {reviews.length>0? <h1>Reviews</h1> : <span></span>}
        </div>
        {console.log(reviews)}
        { reviews?.map((item, index) => {
          return index < 5 ? (
            <Review
              key={index}
              src={item?.author_details.avatar_path}
              name={item?.author}
              content={item?.content}
              reviews={reviews}
            />
          ) : (
            <br />
          );
        })}
      </div>

        <Similarmovies Movies={similarMovies}></Similarmovies>
    
      </div>
   

    </>

  );
};

export default MovieInfo;
