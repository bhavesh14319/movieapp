import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Movieitem from '../Components/Movieitem'

const HomeComp = ({data}) => {
  return (
    <div>
         <Head>
        <title>Movie App</title>
      </Head>

      

      <h1 className={styles.titlePopular}>Popular Movies</h1>

     <div className={styles.movieContainer}>
      {/* {
        data.results&&data.results.map(movie=>{
        let imgSrc= "https://image.tmdb.org/t/p/w400"+movie.poster_path;
         return <div key={movie.id} className={styles.movieItem}>
                      <div className={styles.imgContainer}>
                      <img src={imgSrc} alt="" />
                      </div>
                      <div className={styles.movieInfo}>
                      <h1 className={styles.movieTitle}>{movie.original_title}</h1>
                      <h3 className={styles.movieReleaseDate}>release date: {movie.release_date}</h3>
                      <p className={styles.description}>{movie.overview.length >163 ? movie.overview.slice(0,163):movie.overview } <strong>  <a href=""> Read More... </a></strong> </p>
                      </div>
                </div> 
        })
                     
      
      } */}


      {
        
        data.results&&data.results.map(movie=>{
        let imgSrc= "https://image.tmdb.org/t/p/w400"+movie.poster_path;
         return <Movieitem key={movie.id} movieId={movie.id} imgSrc={imgSrc} title={movie.original_title} releaseDate={movie.release_date} overview={movie.overview}></Movieitem>
        })
                     
      
      }
      


    </div>
      

      
    </div>
  )
}

export default HomeComp
