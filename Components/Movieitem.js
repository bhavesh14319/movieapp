import React from 'react'
import styles from '../styles/Home.module.css'
import MovieInfo from '../Components/MovieInfo'
import Link from 'next/link'

const Movieitem = (props) => {
  
  return (
    <>

    <Link href={`/${props.movieId}`}>{
     props.movieId&&<div>
      <div className={styles.movieItem}>
                    <div className={styles.imgContainer}>
                    <img src={props.imgSrc} alt="" />
                    </div>
                    <div className={styles.movieInfo}>
                    <h1 className={styles.movieTitle}>{props.title}</h1>
                    <h3 className={styles.movieReleaseDate}>release date: {props.releaseDate}</h3>
                    <p className={styles.description}>{props.overview.length >163 ? props.overview.slice(0,163):props.overview } <strong>  <a href=""> Read More... </a></strong> </p>
                    </div>
              </div> 
      </div>
    }
    </Link>
 

    </>
  )
}

export default Movieitem
