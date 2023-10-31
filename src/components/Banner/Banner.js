import React, { useEffect, useState } from 'react'
import { API_KEY,imageUrl } from '../../Constants/constant'
import axios from 'axios'

function Banner() {

  const [moive, setMoive] = useState()

  useEffect(()=>{
     axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMoive(response.data.results[6]);
     })
  },[])
  return (
    <div style={{backgroundImage:`url(${moive ? imageUrl+moive.backdrop_path:"" })`}} className='banner'>
        <div className='content'>
            <h1 className='title'>{moive ? moive.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>My last</button>

            </div>
            <h1 className='description'>{moive ?moive.overview:""}</h1>
        </div>
      <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner 
