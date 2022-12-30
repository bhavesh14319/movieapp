import React from 'react'
import { useRouter } from 'next/router'
import MovieInfo from '../Components/MovieInfo'
import Searchedmovies from '../Components/Searchedmovies'

function MovieDetails() {

  let bool = true;

  function validate(query){
    // if it is number - isNaN will give false
    if( isNaN(parseInt(query))) {
        bool=false;
    }else{
      bool = true;
    }
  }

    const router = useRouter();
   

    return( <>
    {/* {console.log(movieId)} */}
      {
        validate(router.query.movieId)
      }
      {
        bool ? <MovieInfo query={router.query} movieId={router.query.movieId}/> : <Searchedmovies query={router.query.movieId}/>
      } 
  </>
 
    )
  
 
  
}



export default MovieDetails