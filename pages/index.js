import Head from 'next/head'
import Image from 'next/image'
import { useEffect,useState } from 'react'
import styles from '../styles/Home.module.css'
import Movieitem from '../Components/Movieitem'
import HomeComp from '../Components/HomeComp'

export default function Home() {

  const [data,setData] = useState({})

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=db75be3f6da59e6c54d0b9f568d19d16&language=en")
    .then(res=>res.json())
    .then((data)=>{
      // console.log(data);
      setData(data);
    })
  },[])

  return (
    <>
      <HomeComp data = {data}/>
    
  </>

  )
}
