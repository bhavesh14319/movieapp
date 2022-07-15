import { userAgentFromString } from 'next/server';
import React, { useEffect, useState } from 'react'
import styles from '../styles/Search.module.css'
import Link from 'next/link'

const Searchedmovies = (props) => {

    const [searchData, setSearchData] = useState([])

    // fetch search result and set searchData state
    async function searchMovies(){
        let query = "https://api.themoviedb.org/3/search/movie?api_key=db75be3f6da59e6c54d0b9f568d19d16&query=" + props.query + '"';
        console.log(query);
        let res = await fetch(query);
        let data = await res.json();
        setSearchData(data.results);
        // console.log(searchData)
    }

    // console.log(props)

    useEffect(()=>{
        searchMovies();
    },[props.query])
  return (
    
    <div className={styles.mainContainer}>
        {console.log(searchData)}
        <div className={styles.resultContainer}>
            {
                searchData?.map((movie)=>{
                    return  <Link href={`/${movie.id}`}><div key={movie.id} className={styles.result}>
                            <img className={styles.Image} src={"https://image.tmdb.org/t/p/w200"+movie?.poster_path} alt="" />
                            <div className={styles.infoContainer}>
                            <h2 className={styles.movieTitle}>{movie?.original_title}</h2>
                             <p className={styles.movieOverview}><strong>overview: </strong>{movie?.overview}</p>
                             <p className={styles.movieLanguage}><strong>Language: </strong> {movie?.original_language}</p>
                             <p className={styles.moviePopularity}><strong>Popularity: </strong> {movie?.popularity}</p>
                             <p className={styles.movieAvgVotes}><strong>Avg Votes:</strong> {movie?.vote_average}</p>
                             <p className={styles.movieReleaseDate}><strong>Release Date:</strong> {movie?.release_date}</p>
                            </div>
                           </div>
                           </Link>
                })
            }
        </div>
    </div>
  )
}

export default Searchedmovies
