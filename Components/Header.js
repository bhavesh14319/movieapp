import React, { Component, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Script from 'next/script'
import styles from '../styles/Header.module.css'
import { useRouter } from 'next/router'

export default function NavBar() {
  const router = useRouter()
  const [searchText, setSearchText] = useState("")


  // updates the searchText state with user input 
const updateSearch = (e) => {
    console.log(e);
    setSearchText(e.target.value);
}

// navigates to the results page
function searchMovies (e) {
    let searchBox = document.getElementById("search");
    console.log(searchBox)
    router.push(`/${searchText}`)
    if(searchBox){
      searchBox.value=''
    }
}

  return (
    <div>
      <Head>
           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      </Head>

      <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js" integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB" crossorigin="anonymous"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></Script>

      <div className={styles.main}>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" >
             <div className="container-fluid">
                 <img className={`${styles.logo} navbar-brand`} src="logo.png" ></img>
                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                 <span className="navbar-toggler-icon"></span>
                 </button>
                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className={`navbar-nav me-auto mb-2 mb-lg-0 ${styles.ul}`}>
                    <Link href="/" > 
                      <a href="#" className="nav-link " aria-current="page">
                         <li className="nav-item">
                          Popular  
                         </li>
                      </a> 
                    </Link>
                    <Link href="/top-rated" > 
                      <a className="nav-link " aria-current="page"> 
                         <li className="nav-item">
                         Top-Rated 
                         </li>
                      </a>
                    </Link>
                    <Link href="/upcoming" > 
                      <a className="nav-link " aria-current="page"> 
                         <li className="nav-item">
                         Upcoming 
                         </li>
                      </a>
                    </Link>
                      </ul>
                      <input type="text" id='search' className={styles.searchBox} placeholder="Search Movies" onChange={updateSearch}/><span><Link href={`/${searchText}`}><i className={`fa fa-search ${styles.fa}`} onClick={searchMovies}></i></Link></span>
                 </div>
             </div>

             

             </nav>

        </div>
      
    </div>
  )
}